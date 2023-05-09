//import {createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    events:[],
    isLoading:false,
    error:null
}

const eventSlice = createSlice({
    name:'events',
    initialState,
    reducers:{
        setEvents(state,payload) {
            state.events = payload;
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

const eventReducer = eventSlice.reducer;


export default eventReducer;
export const {setEvents,loading,hasError} = eventSlice.actions

