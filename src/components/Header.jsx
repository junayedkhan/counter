import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({count}) => {
    return (
        <div className="container">
            <header className='header'>
                <h3>shop</h3>
                <Link to="/" >home</Link>
                <Link to="/cart" >cart</Link>
                <div className='cart_box'>
                <h4>{count}</h4><i className="fas fa-cart-plus"></i>
                </div>
            </header>
        </div>
    )
}

export default Header;
