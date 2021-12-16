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
        .catch((err) => {
            console.log(err)
        })
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        feacthProducts()
    },[])

    console.log(products)
    
    return (
        <div className="container">
            <div className="row content">
                {products.length === 0 ? 

                <div className='col-lg-4 col-md-6 col-12 mb-3'>
                    <div class="card" aria-hidden="true">
                        <img src="..." class="card-img-top" style={{height: "400px"}} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <button tabindex="-1" class="btn btn-primary disabled placeholder col-6"></button>
                        </div>
                    </div>
                </div>
                
                : (
                    <>
                        {products.map((product, index) => {
                            return(
                            <div className="col-lg-4 col-md-6 col-12 mb-3" key={index}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top" style={{height: "400px"}} alt={product.title} />
                                    <div className="card-body" style={{height: "180px"}}>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p>price: {product.price}$</p>
                                        <button className="btn btn-primary" onClick={() => dispatch(addToCart({product}))}>
                                            <i class="fas fa-shopping-cart" style={{color: "#fff"}}></i>
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
