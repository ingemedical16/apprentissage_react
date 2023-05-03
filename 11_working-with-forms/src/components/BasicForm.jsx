import useInput from "../hooks/useInput";
import { isValidEmail } from "../helper/tools";

const BasicForm = (props) => {
    const {
        value:firstName,
        isValid:isFirstNameInputValid,
        hasError:firstNameHasError,
        inputBlurHandler:firstNameBlurHandler,
        inputChangeHandler:firstNameChangeHandler,
        rest:firstNameInputRest,
    } = useInput(value=>value.trim() !== '');

    const {
        value:lastName,
        isValid:isLastNameInputValid,
        hasError:lastNameHasError,
        inputBlurHandler:lastNameBlurHandler,
        inputChangeHandler:lastNameChangeHandler,
        rest:lastNameInputRest,
    } = useInput(value=>value.trim() !== '');

    const {
        value:email,
        isValid:isEmailInputValid,
        hasError:emailHasError,
        inputBlurHandler:emailBlurHandler,
        inputChangeHandler:emailChangerHandler,
        rest:emailInputRest,
    }= useInput(isValidEmail)
    let isFormValid = false;
    if(isFirstNameInputValid && isLastNameInputValid && isEmailInputValid){
        isFormValid= true;
    }
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        if(!isFormValid){
            return;
        }
        console.log("Form submited!");
        firstNameInputRest();
        lastNameInputRest();
        emailInputRest();
    };

    const firstNameClass = firstNameHasError
        ? 'form-control invalid'
        : 'form-control';
    const lastNameClass = lastNameHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailClass = emailHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
      <form onSubmit={formSubmitHandler}>
        <div className='control-group'>
          <div className={firstNameClass}>
            <label htmlFor='firstName'>First Name</label>
            <input 
                type='text' 
                id='firstName'
                value={firstName}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                />
            {firstNameHasError && <p className='error-text'>First Name must not be empty</p>}
          </div>
          <div className={lastNameClass}>
            <label htmlFor='lastName'>Last Name</label>
            <input 
                type='text' 
                id='lastName'
                value={lastName}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                />
            {lastNameHasError && <p className='error-text'>Last Name must not be empty</p>}
          </div>
        </div>
        <div className={emailClass}>
          <label htmlFor='email'>E-Mail Address</label>
          <input 
                type='email' 
                id='email'
                value={email}
                onChange={emailChangerHandler}
                onBlur={emailBlurHandler}
                />
            {emailHasError && <p className='error-text'>Email is invalid</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!isFormValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;