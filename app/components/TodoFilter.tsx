import React from 'react'

const TodoFilter = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h2 className='font-bold text-2xl'>
        Todo List
      </h2>
      <div className='flex justify-between w-[80%] gap-3 flex-1'>
        <button className='flex-1 bg-[#00A4B8] text-white py-2 rounded-md'>
          All
        </button>
        <button className='flex-1 bg-[#00A4B8] text-white py-2 rounded-md'>
          Done
        </button>
        <button className='flex-1 bg-[#00A4B8] text-white py-2 rounded-md'>
          Todo
        </button>
      </div>
    </div>
  )
}

export default TodoFilter
