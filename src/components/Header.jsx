import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const cartData = useSelector(state => state.cart.cartItems)

    return (
        <div className="container-fluid">
            <header className='header border-bottom border-2'>
                <Link to="/" >
                    <h3>shop</h3>
                </Link>
                <div className='cart_box'>
                    <Link to="/cart" >
                        <button type="button" className="btn btn-primary position-relative">
                            <i className="fas fa-cart-plus" style={{color: "#fff"}}></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                {cartData.length}
                            </span>
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header;
