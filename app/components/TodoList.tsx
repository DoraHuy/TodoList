import { Todo } from '@/app/components/TodoContainer'
import TodoItems from '@/app/components/TodoItems'

interface TodoListProps {
  todos: Todo[],
  doneTodo: (id: number) => void
  editTodo: (id: number, content: string) => void
  deleteTodo: (id: number) => void
}

const TodoList = ({ todos, doneTodo, editTodo, deleteTodo }: TodoListProps) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      {
        todos.map((todo) => {
          return <TodoItems key={todo.id} todo={todo} doneTodo={doneTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
        })
      }
    </div>
  )
}

export default TodoList
