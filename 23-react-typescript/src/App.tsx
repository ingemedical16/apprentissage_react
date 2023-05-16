import { useState } from 'react'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/Todo'

import './App.css'

function App() {
  const [itemes, setItems] = useState<Todo[]>([])
  const addTodoHandler = (text:string)=>{
    let newTodo = new Todo(text);
    setItems(prevItemes => prevItemes.concat(newTodo))

  }

  const removeTodoHandler = (id:string)=>{
    
    setItems(peveItems =>peveItems.filter(item => item.id !== id))


  }

  return (
    <>
      <div className="card">
        <NewTodo addTodo={addTodoHandler}/>
        <Todos items={itemes} onRemoveTodo={removeTodoHandler}/>
      </div>
     
    </>
  )
}

export default App
