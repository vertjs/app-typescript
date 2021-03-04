import React, {useState, useEffect} from 'react'
import { TodoForm } from '../components/TodoForm';
import { Todolist } from '../components/Todolist';
import { ITodo } from '../interfaces';

export const TodosPages:React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

  return (
    <React.Fragment>
      <TodoForm onAdd={addTodo}/>

      <Todolist
      todos={todos} 
      onToggle={toggleHandler} 
      onRemove={removeHandler}
      />
    </React.Fragment>
  )
}