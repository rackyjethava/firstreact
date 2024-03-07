import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import style from "../product/Product.module.css"

function Product(props) {
    const [products, setProducts] = useState([]);
    const [search, serchdata]=useState("");
    const[sort,setSort]=useState("");
 

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

    const handleFilter=()=>{

        const fdata=products.filter((v)=>
        v.title.toLowerCase().includes(search)||
        v.description.toLowerCase().includes(search)||
        v.price.toString().includes(search)
            
        );

        const sortdata=fdata.sort((a,b)=>{
            if(sort==='lh'){
                return a.price-b.price;
            }else if(sort ==='hl'){
                return b.price - a.price;
            }else if(sort==='az'){
                return  a.title.localeCompare(b.title);
            }else if(sort ==='za'){
                return  b.title.localeCompare(a.title);
            }
        })

        
        return fdata;

    }

    const filterData= handleFilter()

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
                        onChange={(event)=>serchdata(event.target.value)}
                        
                    />
                 
                    <select name='sort' onChange={(event)=>setSort(event.target.value)} className={style.select-container}> 
                        <option value="0">--select--</option>
                        <option value="lh">Low to High</option>
                        <option value="hl">High to low</option>
                        <option value="az">A to Z</option>
                        <option value="za">Z to a</option>
                    </select>
                  
                </div>

                {filterData.map((v, i) => (
                    <div  className='col-3 gy-4'>
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
