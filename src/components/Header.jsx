import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const cartData = useSelector(state => state.cart.cartItems)

    return (
        <div className="container-fluid">
            <header className='header'>
                <Link to="/" >
                    <h3>shop</h3>
                </Link>
                <div className='cart_box'>
                    <Link to="/cart" >
                        <button type="button" class="btn btn-primary position-relative">
                            <i className="fas fa-cart-plus" style={{color: "#fff"}}></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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
