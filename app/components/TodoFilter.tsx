interface FilterProps {
  filter: 'all' | 'todo' | 'done' | 'deleted';
  filterTodo: (filter: 'all' | 'todo' | 'done' | 'deleted') => void
}

const TodoFilter = ({ filter, filterTodo }: FilterProps) => {

  const filters = [
    { label: 'Tất cả', value: 'all' },
    { label: 'Todo', value: 'todo' },
    { label: 'Đã hoàn thành', value: 'done' },
    { label: 'Đã xóa', value: 'deleted' }
  ]

  return (
    <div className="flex justify-center">
      <div className='flex justify-center gap-2 my-4 w-[80%]'>
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => filterTodo(f.value as any)}
            className={`px-4 py-2 rounded-md transition-colors flex-1 ${filter === f.value
              ? 'bg-[#00A4B8] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>

  )
}

export default TodoFilter
