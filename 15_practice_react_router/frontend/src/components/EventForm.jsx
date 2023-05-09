import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const {submitHandller,changeHandler} = method;
  const navigate = useNavigate();
  
  function cancelHandler() {
    navigate('..');
  }
  

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input 
          id="title" 
          type="text" 
          name="title" 
          value={event? event.title : ''}
          onChange={changeHandler}
          required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input 
          id="image" 
          type="url" 
          name="image" 
          value={event? event.image : ''}
          onChange={changeHandler}
          required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input 
          id="date" 
          type="date" 
          name="date" 
          value={event? event.date : ''}
          onChange={changeHandler}
          required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea 
          id="description" 
          name="description" 
          value={event? event.description : ''}
          onChange={changeHandler}
          rows="5" 
          required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
