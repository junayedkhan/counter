import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {

        addToCart: (state, {payload}) => {
            const check = state.cartItems.every(item =>{
                return item.productId !== payload.product.id
            })

            const event = new Date();
            const date = event.toLocaleTimeString();

            if(check){
                state.cartItems.push({
                    productId: payload.product.id,
                    date: date,
                    price: payload.product.price,
                    title: payload.product.title,
                    quantity: payload.product = 1,
                })
            }
            else{
                alert("product allready add to cart")
            }
        },

        increment: (state, {payload}) => {
            const data = state.cartItems.map((val) => {
                if(val.productId === payload){
                    return { ...val, quantity: val.quantity+1 }
                }
                return val
            })
            return { ...state.cartItems, cartItems: data };
        },

        decrement: (state, {payload}) => {
            const data = state.cartItems.map((val) => {
                if(val.productId === payload){
                    return { ...val, quantity: val.quantity-1 }
                }
                return val
            })
            .filter(val => val.quantity !== 0)
            return { ...state.cartItems, cartItems: data };
        },

        remove: (state, {payload}) => {
            if(window.confirm("Do you want to delete this product?")){
                const data = state.cartItems.filter((val) => val.productId !== payload)
                return {...state.cartItems, cartItems: data}
            }
        },

        clearCart: (state) => {
            if(window.confirm("Do you want to clear Cart?")){
                return {...state.cartItems, cartItems: []}
            }
        }

    }
})

export const {
    addToCart,
    increment,
    decrement,
    remove,
    clearCart
} = cartSlice.actions
export default cartSlice.reducer