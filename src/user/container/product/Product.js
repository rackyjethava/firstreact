import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Product(props) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

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

    const handleSearchChange = (data) => {
        setSearchQuery(data.target.value);
    }

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='container'>
            <div className='row'>
                <div className="input-box">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search product"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>

                {filteredProducts.map((v, i) => (
                    <div  className='col-3 gy-4'>
                        <Card style={{ width: '18rem' }} >
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
