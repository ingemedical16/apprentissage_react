const [enteredNameTouched,setEnterNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputisInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredNameInputBlurHandler = (e)=>{
    setEnterNameTouched(true)
  }
  const enteredNameInputChangeHandler = (e) =>{
    setEnterName(e.target.value);
    
  };

  const nameInputCalss = nameInputisInvalid 
  ? 'form-control invalid'
  : 'form-control';

<div className={nameInputCalss}>
          <label htmlFor='email'>Your Email</label>
          <input 
            type='email' 
            id='email'
            onChange={enteredNameInputChangeHandler}
            onBlur={enteredNameInputBlurHandler}
            value={enteredName} 
          />
          {nameInputisInvalid && <p className='error-text'>Name must not be empty</p>}
        </div>