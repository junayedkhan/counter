import React from 'react'
import Item from './Item';

const Cart = ({value}) => {

    return (
        <div className="container">
            <Item value={value} />
        </div>
    )
}

export default Cart;
