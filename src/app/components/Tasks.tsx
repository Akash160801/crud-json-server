'use client'

import { FormEventHandler, useState } from 'react'
import { Task } from '../../../tasks'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '../../../api'

interface TaskProps {
  task: Task
}

const Tasks: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter()
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [taskEdit, setTaskEdit] = useState<string>(task.text)

  const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await editTodo({
      id: task.id,
      text: taskEdit,
    })

    setOpenModalEdit(false)
    router.refresh()
  }

  const handleDelete = async (id: string) => {
    await deleteTodo(id)
    setOpenModalDelete(false)
    router.refresh()
  }

  return (
    <tr className="hover" key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-4">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          className="text-blue-500 cursor-pointer"
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEdit}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div>
              <input
                value={taskEdit}
                onChange={(e) => setTaskEdit(e.target.value)}
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
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          className="text-red-500 cursor-pointer"
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDelete(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  )
}
export default Tasks
