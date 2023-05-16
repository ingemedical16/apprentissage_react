import React , {createContext,FC,useState} from 'react';
import Todo from '../models/Todo';

interface Todos {
    itemes:Todo[],
    addTodo: (text:string)=>void,
    removeTodo: (id:string)=>void
}

export const TodosContext = createContext<Todos>({
    itemes:[],
    addTodo: (text)=>{},
    removeTodo:(id) => {}, 
});


const TodosProvider: FC<{children:any}> = (props) => {
    const [itemes, setItems] = useState<Todo[]>([])
  const addTodoHandler = (text:string)=>{
    let newTodo = new Todo(text);
    setItems(prevItemes => prevItemes.concat(newTodo))

  }

  const removeTodoHandler = (id:string)=>{
    
    setItems(peveItems =>peveItems.filter(item => item.id !== id))


  }
  const contextValue:Todos = {
    itemes:itemes,
    addTodo:addTodoHandler,
    removeTodo:removeTodoHandler
  }

    return (<TodosContext.Provider value={contextValue}>
         {props.children}
    </TodosContext.Provider>);
}
export default TodosProvider
