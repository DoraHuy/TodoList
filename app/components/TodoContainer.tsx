'use client'
import NewTodos from '@/app/components/NewTodos'
import TodoActions from '@/app/components/TodoActions'
import TodoFilter from '@/app/components/TodoFilter'
import TodoList from '@/app/components/TodoList'
import { useEffect, useState } from 'react'

export interface Todo {
  id: number
  content: string
  isDone: boolean
  isDelete: boolean
}

const mockTodos: Todo[] = [
  {
    id: 1,
    content: "Ôn bài",
    isDone: false,
    isDelete: false
  },
  {
    id: 2,
    content: "hehe",
    isDone: false,
    isDelete: false
  }
]

const TodoContainer = () => {

  const [todos, setTodos] = useState<Todo[]>(mockTodos)

  const addTodo = (content: string) => {

    if (content.trim() === '') return

    const newTodo: Todo = {
      id: Date.now(),
      content: content,
      isDone: false,
      isDelete: false
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const doneTodo = (id: number) => {
    const updateTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, isDone: !todo.isDone }
        : todo
    )

    setTodos(() => [...updateTodos])

  }

  const editTodo = (id: number, newContent: string) => {
    const updateTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, content: newContent }
        : todo
    )

    setTodos(() => [...updateTodos])
  }

  const deleteTodo = (id: number) => {
    const updateTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, isDelete: !todo.isDelete }
        : todo
    )

    setTodos(() => [...updateTodos])
  }

  const todoAll = () => {
    return todos
  }

  const todoDone = () => {
    return todos.filter((todo) => todo.isDone)
  }


  return (
    <div className='flex flex-col gap-4 py-8'>
      <NewTodos addTodo={addTodo} />
      <TodoFilter />
      <TodoList todos={todos} doneTodo={doneTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
      <TodoActions />
    </div>
  )
}

export default TodoContainer
