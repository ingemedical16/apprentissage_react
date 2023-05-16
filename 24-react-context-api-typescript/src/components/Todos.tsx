import {FC,useContext} from 'react';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos:FC = () => {
    const ctx = useContext(TodosContext)
    return (
        <ul className={classes.todos}>
            {ctx.itemes.map(item =><TodoItem key={item.id} text={item.text} onRemoveTodo={ctx.removeTodo.bind(null,item.id)}/>)}
        </ul>
    );
}

export default Todos;