'use client'
import { TaskContext } from '@/context/TaskContext';
import React, {useContext, useState} from 'react'
const AddTask = ({}) => {
  const { addTask } = useContext(TaskContext)
  const [description, setDescription] = useState('')
  const saveTask = (e: {preventDefault : () => void}) => {
    e.preventDefault()
      console.log('Salvar uma nova tarefa...')
  }
    return (
      <div className="text-center">
        <h3 className="mb-4 text-xl font-semibold text-gray-600">Adicionar tarefa</h3>
        <form onSubmit={saveTask} className="w-full">
          <input type="text"
           placeholder="Descreva a tarefa"
           className="border border-grey-500 px-4 py-2 rounded-xl focus:outline-none focus:border-blue-600 focus:border-2"
           name="description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
          />
          <button
           type="submit"
           className="bg-gray-600 text-white px-4 py-2 rounded-lg mx-2 hover:bg-blue-600"
           >Incluir</button>
        </form>
      </div>
    
    );
};

export default AddTask;