import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProduct: {}
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    
    reducers: {

        setProducts: (state, {payload}) => {
            state.products = payload
        },

        selectedProduct: (state, {payload}) => {
            state.selectedProduct = payload
        },
      
        removeSelectedProduct: (state) => {
            state.selectedProduct = {}
        },
      

    }
})

export const { setProducts, selectedProduct, removeSelectedProduct } = productsSlice.actions
export default productsSlice.reducer