//import {createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit'

const initialState = {counter:0,showCounter:true}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        icrement(state) {
            state.counter++;
        },
        decrment(state) {
            state.counter--;
        },
        incresse(state,action) {
            state.counter= state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

const counterReducer = counterSlice.reducer;


export default counterReducer;
export const {icrement,decrment,toggleCounter,incresse} = counterSlice.actions


/*const counterReducer = (state= initialState ,action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'increse') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1
        }
       
    }
    if (action.type === 'toggle') {
        return {
            ...state,
            toggleCounter: !state.toggleCounter
        }
    }

    return state

}

const store = createStore(counterReducer);

export default store;*/
