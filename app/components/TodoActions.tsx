// TodoActions.tsx
'use client'

import { Todo } from './TodoContainer'

interface TodoActionsProps {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

const TodoActions = ({ todos, setTodos }: TodoActionsProps) => {

  const deleteAllPermanent = () => {
    if (confirm('Bạn có chắc muốn xóa tất cả todo vĩnh viễn?')) {
      setTodos([])
    }
  }

  const restoreAllDeleted = () => {
    const restoredTodos = todos.map(todo =>
      todo.isDelete ? { ...todo, isDelete: false } : todo
    )
    setTodos(restoredTodos)
  }

  const deleteAllCompleted = () => {
    const remainingTodos = todos.filter(todo => !todo.isDone)
    setTodos(remainingTodos)
  }

  return (
    <div className="flex items-center justify-center">
      <div className='flex justify-between w-[80%] gap-3 mt-4'>
        <button
          onClick={restoreAllDeleted}
          className='px-4 py-2 bg-green-500 flex-1 text-white rounded-md hover:bg-green-600'
        >
          Khôi phục tất cả
        </button>
        <button
          onClick={deleteAllCompleted}
          className='px-4 py-2 bg-yellow-500 flex-1 text-white rounded-md hover:bg-yellow-600'
        >
          Xóa đã hoàn thành
        </button>
        <button
          onClick={deleteAllPermanent}
          className='px-4 py-2 bg-red-500 flex-1 text-white rounded-md hover:bg-red-600'
        >
          Xóa tất cả
        </button>
      </div>
    </div>

  )
}

export default TodoActions