import {useState} from 'react';
import useInput from '../hooks/use-input';
import {isValidEmail} from '../helper/tools'
const SimpleInput = (props) => {
  const {
    value:enteredName,
    isValid:enteredNameIsValid,
    hasError:nameInputisInvalid,
    inputBlurHandler:enteredNameInputBlurHandler,
    inputChangeHandler:enteredNameInputChangeHandler,
    rest:restNameInput,
} = useInput(value=> value.trim() !== '');

const {
  value:enteredEmail,
  isValid:enteredEmailIsValid,
  hasError:emailInputisInvalid,
  inputBlurHandler:enteredEmailInputBlurHandler,
  inputChangeHandler:enteredEmailInputChangeHandler,
  rest:restEmailInput,
} = useInput(isValidEmail);



 
  let formIsValid = false
     if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid = true
    
  }

 
  const formSubmetionHandler = (e) =>{
    e.preventDefault();
    
    if(!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }
     restNameInput();
     restEmailInput();
  };
  
  const nameInputCalss = nameInputisInvalid 
  ? 'form-control invalid'
  : 'form-control';

  const emailInputCalss = emailInputisInvalid 
  ? 'form-control invalid'
  : 'form-control';
    return (
      <form onSubmit={formSubmetionHandler}>
        <div className={nameInputCalss}>
          <label htmlFor='name'>Your Name</label>
          <input 
            type='text' 
            id='name'
            onChange={enteredNameInputChangeHandler}
            onBlur={enteredNameInputBlurHandler}
            value={enteredName} 
          />
          {nameInputisInvalid && <p className='error-text'>Name must not be empty</p>}
        </div>
        <div className={emailInputCalss}>
          <label htmlFor='email'>Your Email</label>
          <input 
            type='email' 
            id='email'
            onChange={enteredEmailInputChangeHandler}
            onBlur={enteredEmailInputBlurHandler}
            value={enteredEmail} 
          />
          {emailInputisInvalid && <p className='error-text'>Email must not be empty</p>}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;