import { useState } from 'react';


const useInput = (validityFun) => {
    const [value,setValue]=useState('');
    const [inputIsTouched,setInputIsTouched]= useState(false);

    const isValid = validityFun(value);
    const hasError = !isValid && inputIsTouched;

    const inputBlurHandler = () =>{
        setInputIsTouched(true);
    };

    const inputChangeHandler = (e) =>{
        setValue(e.target.value);
    };

    const rest = ()=>{
        setInputIsTouched(false);
        setValue('');
    };

    return {
        value,
        isValid,
        hasError,
        inputBlurHandler,
        inputChangeHandler,
        rest,
    }


}

export default useInput;