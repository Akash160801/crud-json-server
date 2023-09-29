import { Task } from '../../../tasks'
import Tasks from './Tasks'

interface ToDoListProps {
  tasks: Task[]
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-gray-100">
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Tasks key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ToDoList
