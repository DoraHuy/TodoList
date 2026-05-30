import React from 'react'

const TodoActions = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[80%] flex justify-between gap-2 text-white'>
        <button className='bg-red-500 px-3 py-2 flex-1 rounded-md'>
          Delete done task
        </button>
        <button className='bg-red-500 px-3 py-2 flex-1 rounded-md'>
          Delete all task
        </button>
      </div>

    </div>
  )
}

export default TodoActions
