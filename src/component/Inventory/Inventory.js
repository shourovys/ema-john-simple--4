import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const addToInventory = () => {
        const products = fakeData
        fetch('http://localhost:3000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => console.log('success', data))
    }

    return (
        <div>
            <h4>hello , I am Inventory</h4>
            {/* <button onClick={addToInventory}>Add Invertors</button> */}
        </div>
    );
};

export default Inventory;