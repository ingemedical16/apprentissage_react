import {FC,useRef,FormEvent} from 'react';
import classes from './NewTodo.module.css';

const NewTodo:FC<{addTodo:(text:string)=>void}> = (props)=> {
    const todoRef = useRef<HTMLInputElement>(null)
    const submitHandler = (e:FormEvent) =>{
        e.preventDefault();
        let text = todoRef.current!.value
        if(text.length === 0){
            return;
        }
        props.addTodo(text)
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'></label>
            <input id='text' name="text" ref={todoRef}/>
            <button>Add Todo</button>
            
        </form>
    );
}

export default NewTodo;