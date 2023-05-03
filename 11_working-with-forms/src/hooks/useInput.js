import { useReducer } from 'react';

const initialState = {
    value: '',
    isTouched: false,
}

const inputReducer = (state, action) => {

    if (action.type === "INPUT") {
        return {
            value: action.value,
            isTouched: state.isTouched,
        }
    }
    if (action.type === "BLUR") {
        return {
            value: state.value,
            isTouched: true,
        }
    }
    if (action.type === "REST") {
        return {
            value: '',
            isTouched: false,
        }
    }

    return initialState;
}

const useInput = (validityFun) => {
    const [input, dispatch] = useReducer(inputReducer, initialState);

    const isValid = validityFun(input.value);
    const hasError = !isValid && input.isTouched;

    const inputBlurHandler = () => {
        dispatch({ type: 'BLUR' })
    };

    const inputChangeHandler = (e) => {
        dispatch({ type: 'INPUT', value: e.target.value });
    };

    const rest = () => {
        dispatch({ type: 'REST' })
    };
    return {
        value:input.value,
        isValid,
        hasError,
        inputBlurHandler,
        inputChangeHandler,
        rest,
    }
};

export default useInput;