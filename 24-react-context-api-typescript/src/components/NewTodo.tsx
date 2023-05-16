import {FC,useRef,FormEvent,useContext} from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo:FC = ()=> {
    const todoRef = useRef<HTMLInputElement>(null);
    const addTodo = useContext(TodosContext).addTodo
    const submitHandler = (e:FormEvent) =>{
        e.preventDefault();
        let text = todoRef.current!.value
        if(text.length === 0){
            return;
        }
        addTodo(text)
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