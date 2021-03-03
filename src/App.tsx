import React,{useState} from 'react';
import Navbar from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import './index.css'
import { Todolist } from './components/Todolist';
import { ITodo } from './interfaces';


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (title: string): void => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
  //  setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id:number) => {
    setTodos(prev => prev.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    }))
  }
  const removeHandler = (id:number) => {
    const shoudRemove = window.confirm('Вы уверены, что хотите удалить элемент?') 
    if(shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return <>
    <Navbar/>
    <div className="container">
      <TodoForm onAdd={addTodo}/>

      <Todolist
       todos={todos} 
       onToggle={toggleHandler} 
       onRemove={removeHandler}
      />
    </div>
  </>
}


export default App;
