'use client'

import { FormEventHandler, useState } from 'react'
import Modal from './Modal'
import { AiOutlinePlus } from 'react-icons/ai'
import { addTodo } from '../../../api'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

export default function AddTask() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTask, setNewTask] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addTodo({
      id: uuidv4(),
      text: newTask,
    })
    setNewTask('')
    setModalOpen(false)
    router.refresh()
  }

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New Task <AiOutlinePlus />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div>
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs my-2 mx-2"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
