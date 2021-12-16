import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';
import axios from 'axios';
import { setProducts } from '../redux/slice/productSlice';
import { Link } from 'react-router-dom';

const Home = () => {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const feacthProducts = async() => {
        const res = await axios.get(`https://fakestoreapi.com/products`)
        .catch((err) => console.log(err))
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        feacthProducts()
    },[])

    console.log(products)
    
    return (
        <div className="container">
            <div className="row">
                {products.length === 0 ? 

                <div className='col-lg-4 col-md-6 col-12 mb-3'>
                    <div className="card" aria-hidden="true">
                        <img src="..." className="card-img-top" style={{height: "400px"}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <button className="btn btn-primary disabled placeholder col-6"></button>
                        </div>
                    </div>
                </div>
                
                : (
                    <>
                        {products.map((product, index) => {
                            return(
                            <div className="col-lg-4 col-md-6 col-12 mb-3 position-relative" key={index}>
                                <div className="card p-2">
                                    <img src={product.image} className="card-img-top border-bottom border-2" style={{height: "400px", padding: "20px"}} alt={product.title} />
                                    <div className="card-body" style={{height: "130px"}}>
                                        <Link to={`/products/${product.id}`}>
                                            <h5 className="card-title" style={{color: "#000"}}>{product.title}</h5>
                                        </Link>
                                        <h5 className='pt-2'>price: {product.price}$</h5>
                                        <button className="btn btn-primary position-absolute bottom-0 end-0 p-3" onClick={() => dispatch(addToCart({product}))}>
                                            <i className="fas fa-shopping-cart" style={{color: "#fff", fontSize: "25px"}}></i>
                                        </button>
                                    </div>
                                </div>                      
                            </div>
                            )
                        })}
                    </>
                )}
            </div>
        </div>

    )
}

export default Home;
