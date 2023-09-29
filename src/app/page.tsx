import AddTask from './components/AddTask'
import ToDoList from './components/ToDoList'
import { getAllTodo } from '../../api'

export default async function Home() {
  const tasks = await getAllTodo()

  return (
    <main className="max-w-4xl mx-auto mt-4 ">
      <div className="text-center flex flex-col my-5 gap-4">
        <h1 className="text-2xl font-bold">To Do App</h1>
        <AddTask />
      </div>
      <ToDoList tasks={tasks} />
    </main>
  )
}
