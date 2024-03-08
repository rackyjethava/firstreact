import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardSubtitle, CardText, CardTitle, Input } from 'reactstrap';


function Product(props) {
    const [products, setProducts] = useState([]);
    const [search, serchdata] = useState("");
    const [sort, setSort] = useState("");
    const [categry, setCategory] = useState([]);
    const [selectedCategry, setseletctedCategory] = useState('')


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            let uniqdata = [];

            data.map((v) => {
                if (!uniqdata.includes(v.category)) {
                    uniqdata.push(v.category)
                }
            })

            setCategory(uniqdata);


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

        if (selectedCategry) {
            fdata = fdata.filter((v) => v.category === selectedCategry)
        }


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


        return fdata;

    }

    const filterData = handleFilter()

    console.log(filterData);


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <Input
                        type="search"
                        name="search-form"
                        id="search-form"
                        placeholder="Search product"
                        onChange={(event) => serchdata(event.target.value)}
                    />
                    <br/>
                    <select name='sort' onChange={(event) => setSort(event.target.value)} >
                        <option value="0">--select--</option>
                        <option value="lh">Low to High</option>
                        <option value="hl">High to low</option>
                        <option value="az">A to Z</option>
                        <option value="za">Z to a</option>
                    </select>
                </div>
                <div className='col-md-6 mb-3'>
                 
                        <Button style={{backgroundColor:selectedCategry?"":"yellow"}} onClick={() => setseletctedCategory()} >ALL</Button>
                   
                    <ButtonGroup>
                        {categry.map((v, i) => (
                            <Button style={{backgroundColor:v===selectedCategry?"yellow":""}}  color="warning" outline onClick={() => setseletctedCategory(v)}>
                                {v}
                            </Button>
                        ))}
                    </ButtonGroup>

                </div>

                {filterData.map((v, i) => (
                    <div key={i} className='col-md-3 mb-3'>
                        <Card>
                            <img
                                height={300}
                                alt="Sample"
                                src={v.image}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {v.title.substring(0, 20)}...
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {v.category}
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




