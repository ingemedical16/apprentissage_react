import {createStore} from 'redux';
const counterReducer = (state= {counter:0,toggleCounter:false},action) => {
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

export default store;
