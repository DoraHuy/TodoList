'use client'
import { Todo } from '@/app/components/TodoContainer'
import { Check, Pencil, RotateCcw, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface TodoItemsProps {
  todo: Todo,
  doneTodo: (id: number) => void
  editTodo: (id: number, content: string) => void
  deleteTodo: (id: number) => void
}

const TodoItems = ({ todo, doneTodo, editTodo, deleteTodo }: TodoItemsProps) => {

  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(todo.content)

  const handleEditTodo = () => {

    if (todo.isDelete) return

    if (editContent.trim() === '') {
      alert('Bạn hãy thực hiện nhập nội dung todo')
      return
    }

    editTodo(todo.id, editContent)
    setIsEditing(false)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditTodo()
    }
  }

  return (
    <div className='flex w-[80%] px-3 py-2 border-1 rounded-md border-gray-300'>

      <div className="flex-1 mr-4">
        {isEditing ? (
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none"
            autoFocus
            onKeyDown={handleEnter}
          />
        ) : (
          <span className={`text-gray-800 w-full ${todo.isDone ? 'line-through text-gray-400' : ''} ${todo.isDelete ? 'opacity-40' : ''}`}>
            {todo.content}
          </span>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <input
          type="checkbox"
          className='w-5 h-5'
          checked={todo.isDone}
          onChange={() => doneTodo(todo.id)}
          disabled={todo.isDelete}
        />
        <button
          onClick={() => {
            if (isEditing) {
              handleEditTodo()
            } else {
              setIsEditing(true)
            }
          }}
          className={`${isEditing ? 'text-green-600' : 'text-yellow-500'} hover:opacity-80 ${todo.isDelete ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={todo.isDelete}
        >
          {isEditing ? <Check size={20} /> : <Pencil size={20} />}
        </button>
        <button className={`${!todo.isDelete ? 'text-red-500' : 'text-green-500'}`} onClick={() => deleteTodo(todo.id)}>
          {todo.isDelete ? <RotateCcw /> : <Trash2 />}
        </button>
      </div>

    </div>
  )
}

export default TodoItems
