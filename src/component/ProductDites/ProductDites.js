import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import ShowProduct from '../ShowProduct/ShowProduct';
import { useEffect } from 'react';
import { useState } from 'react';

const ProductDites = () => {
    const [product, setProduct] = useState(null)
    const { productKey } = useParams()
    // const product = fakeData.find(pd => pd.key === productKey)
    useEffect(() => {
        fetch(`http://localhost:3000/products/${productKey}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="">
            {product && <ShowProduct product={product}></ShowProduct>}
        </div>
    );
};

export default ProductDites;