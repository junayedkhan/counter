import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/slice/productSlice';
import { addToCart } from '../redux/slice/cartSlice';

const ProductDetails = () => {

    const product = useSelector((state) => state.products.selectedProduct)
    const dispatch = useDispatch()
    const { productId } = useParams()
    console.log(product)

    const feacthProductDetails = async() => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`) 
        .catch((err) => console.log(err))
        dispatch(selectedProduct(res.data))
    }

    useEffect(() => {
        feacthProductDetails(productId);
        return () => {
          dispatch(removeSelectedProduct());
        };
    },[productId])

    return (
        <div className='container'>
            {Object.keys(product).length === 0 ? 
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="item_img">
                        <img src="..." alt="..." style={{height: "500px"}} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className='inner'>
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <button className='class="btn btn-primary disabled placeholder col-4"' style={{padding: "20px"}} aria-hidden="true"></button>
                    </div>
                </div>
            </div>
            :
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="item_img">
                        <img src={product.image} alt={product.title} style={{height: "500px"}} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className='inner'>
                        <h2 className='mb-3'>{product.title}</h2>
                        <p className='mb-5'>{product.description}</p>
                        <h4 className='mb-4'>Price: {product.price}$</h4>
                        <button className='btn btn-primary' onClick={() => dispatch(addToCart({product}))}>
                            <i className="fas fa-shopping-cart" style={{color: "#fff", fontSize: "25px"}}></i>
                        </button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default ProductDetails;
