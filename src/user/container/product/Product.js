import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import style from "../product/Product.module.css"

function Product(props) {
    const [products, setProducts] = useState([]);
    const [search, serchdata] = useState("");
    const [sort, setSort] = useState("");
    const [categry, setCategory] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleFilter = () => {

        let fdata = products.filter((v) =>
            v.title.toLowerCase().includes(search) ||
            v.description.toLowerCase().includes(search) ||
            v.price.toString().includes(search)

        );


        // const categoryData=()=>{
        //     if(categry !== ""){
        //         return fdata.filter((v)=>v.category === categry)
        //     }
        // }

        // console.log(categoryData);

        const sortdata = fdata.sort((a, b) => {
            if (sort === 'lh') {
                return a.price - b.price;
            } else if (sort === 'hl') {
                return b.price - a.price;
            } else if (sort === 'az') {
                return a.title.localeCompare(b.title);
            } else if (sort === 'za') {
                return b.title.localeCompare(a.title);
            }
        })

        // const categoryData=sortdata.filter((v)=>
        //     console.log(v.category);
        // )

        // console.log(categoryData);

        //     const categoryData = sortdata.filter((v) =>
        //     fdata.find((v) => v.name === v.jewelery)

        // )

        // console.log(categoryData);

      

        return fdata;

    }

    const filterData = handleFilter()

    console.log(filterData);


    return (
        <div className='container'>
            <div className='row'>
                <div className="input-box">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        placeholder="Search product"
                        onChange={(event) => serchdata(event.target.value)}

                    />
                    <select name='sort' onChange={(event) => setSort(event.target.value)} className={style.selectc}>
                        <option value="0">--select--</option>
                        <option value="lh">Low to High</option>
                        <option value="hl">High to low</option>
                        <option value="az">A to Z</option>
                        <option value="za">Z to a</option>
                    </select>

                </div>
                {/* <div className='row'>
                    <div className="category-buttons">
                        <Button onClick={(event)=>console.log(event.target.value)}>Jewelry</Button>
                        <Button onClick={(event)=>console.log(event.target.value)}>Men's Clothing</Button>
                        <Button onClick={(event)=>console.log(event.target.value)}>Women's Clothing</Button>   //undifid
                        <Button onClick={(event)=>console.log(event.target.value)}>Electronics</Button>
                        <Button onClick={(event)=>console.log(event.target.value)}>Clear</Button>
                    </div>
                </div> */}

                <div className='row'>
                    <div className="category-buttons">
                        <Button onClick={() => setCategory("jewelery")}>Jewelry</Button>
                        <Button onClick={() => setCategory("men's clothing")}>Men's Clothing</Button>
                        <Button onClick={() => setCategory("women's clothing")}>Women's Clothing</Button>
                        <Button onClick={() => setCategory("electronics")}>Electronics</Button>
                        <Button onClick={() => setCategory("")}>Clear</Button>
                    </div>
                </div>

                {filterData.map((v, i) => (
                    <div className='col-3 gy-4'>
                        <Card style={{ width: '18rem' }}>
                            <img
                                height={300}
                                alt="Sample"
                                src={v.image}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {v.title.substring(0, 20)}...
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >

                                </CardSubtitle>
                                <CardText>
                                    {v.description.substring(0, 50)}...
                                </CardText>
                                <CardText>
                                    ₹{v.price}
                                </CardText>
                                <Button>
                                    add to cart
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
