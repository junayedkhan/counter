import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove, clearCart } from '../redux/slice/cartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    const totalAmounts = cartItems.reduce((prev, current) => {
        return current.price * current.quantity + prev
    }, 0)

    console.log(cartItems)

    return (
        <div className="container">
            {cartItems.length === 0 ? 
                <div className="alert alert-danger text-center" role="alert">
                    Cart is emapty
                </div>
                : 
                <>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">TIME</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{item.date}</th>
                                <td>{item.title}</td>
                                <td>
                                    <button className='btn btn-success' onClick={() => dispatch(increment(item.productId))}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                        <span className='p-3'>{item.quantity}</span>
                                    <button className='btn btn-success' onClick={() => dispatch(decrement(item.productId))}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                </td>
                                <td>{item.price}$</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => dispatch(remove(item.productId))}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div className='d-flex justify-content-between'>
                    <h2 className='mt-3'>TOTAL: {totalAmounts}$</h2>
                    <div>
                        <button className='btn btn-danger mt-3' onClick={() => dispatch(clearCart())} >CLEAR CART</button>
                        <button className='btn btn-success mt-3 ms-3'>CHECK OUT</button>
                    </div>
                </div>
                </>
            }
        </div>
    )
}

export default Cart;
