import { Task } from './tasks'

const baseUrl = ' http://localhost:3001'

export const getAllTodo = async (): Promise<Task[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' })
  const todos = await res.json()
  return todos
}

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  const newTodo = await res.json()
  return newTodo
}

export const editTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  const updateTodo = await res.json()
  return updateTodo
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
}
