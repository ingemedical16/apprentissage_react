//import {createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products:[],
    isLoading:false,
    error:null
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts(state,payload) {
            state.products = payload;
            state.isLoading= false;
            state.error = null
        },
        loading(state) {
            state.isLoding = true
        },
        hasError(state,payload){
            state.error = payload
            state.isLoading= false
        }
    }
})

const productReducer = productSlice.reducer;


export default productReducer;
export const {setProducts,loading,hasError} = productSlice.actions

