import React, { useEffect, useState } from 'react';

function Product(props) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getdata()
    },[])

    const getdata = async () => {
        const responce = await fetch("https://fakestoreapi.com/products");
        const data = await responce.json();

        console.log("data");
        setProduct(data)

    }

    return (
        <div>

            <div>
            {
            product.map((v, i) => (
                    <h1>{v.title}</h1>
                ))
                }
            </div>

        </div>
    );
}

export default Product;