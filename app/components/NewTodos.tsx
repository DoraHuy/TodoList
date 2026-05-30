'use client'
import { BookAudio } from 'lucide-react'
import React, { useState } from 'react';

interface NewTodoProps {
  addTodo: (content: string) => void;
}

const NewTodos = ({ addTodo }: NewTodoProps) => {

  const [valueTodo, setValueTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (valueTodo.trim() === '') {
      alert('Bạn hãy thực hiện nhập nội dung todo')
      return
    }

    addTodo(valueTodo);

    setValueTodo('')

  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className='flex flex-col items-center gap-2'>
      <h2 className='text-2xl font-bold'>
        TodoInput
      </h2>

      <div className='flex flex-col w-[80%] gap-3'>

        <div className='flex justify-center items-center w-full'>
          <span className='bg-[#00A4B8] text-white px-2 py-2 rounded-md'><BookAudio /></span>
          <input
            type="text"
            placeholder='New Todo'
            className='border-1 py-2 px-2 rounded-md border-gray-300 flex-1'
            value={valueTodo}
            onChange={(e) => setValueTodo(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>

        <button
          className='bg-[#00A4B8] text-white py-2 rounded-md'
          onClick={handleAddTodo}
        >
          Add new task
        </button>

      </div>
    </div>
  )
}

export default NewTodos
