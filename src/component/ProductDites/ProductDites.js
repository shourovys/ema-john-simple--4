import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import ShowProduct from '../ShowProduct/ShowProduct';

const ProductDites = () => {
    const { productKey } = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    return (
        <ShowProduct product={product}></ShowProduct>
    );
};

export default ProductDites;