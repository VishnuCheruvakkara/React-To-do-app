
import React, { useState } from "react"
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";

function Todo() {
    // state sections, down below...
    const [input, setInput] = useState('')
    // storing space,down below...
    const [datas, setData] = useState([])
    //state for track modal open or not 
    const [isModalOpen, setModalOpen] = useState(false)
    //state for edit data 
    const [editData, setEditData] = useState(null)
    //add data inputs in to the data...
    const addToData = () => {

        if (input !== '') {
            setData([...datas, { id: Date.now(), list: input, status: false }])
            // after adding new data clear the input field for new data 
            setInput('')
        }
    }

   

    //clear all the tasks 
    const clearAllTasks = () => {
        setData([])
    }
    //delete the list based on id 
    const deleteById = (id) => {
        setData(datas.filter((data) => data.id !== id))
    }
    //marks as completed by id 
    const CompleteById = (id) => {
        let complete = datas.map((data) => {
            if (data.id === id) {
                return ({ ...data, status: !data.status })
            }
            return data
        })
        setData(complete)
    }
    //Edit by id 
    const EditById = (id) => {
        const taskToEdit = datas.find((data) => data.id === id);
        setEditData(taskToEdit);
        setModalOpen(true)
    }
    //
    const saveEdit = () => {
        if (editData) {
            const updatedData = datas.map((data) => {
                return data.id === editData.id ? { ...data, list: editData.list } : data
            })
            setData(updatedData)
            setModalOpen(false)
            setEditData(null)
        }
    }
    //close edit modal 
    const closeEditModal = () => {
        setModalOpen(false)
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-lime-300 to-lime-700 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-md shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">

                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-4xl font-bold text-center text-lime-700">
                        Todo App
                    </h1>
                    <p className="text-sm text-lime-600 font-medium">
                        Complete the task on time
                    </p>
                </div>

                {/* Input Section */}

                <form className="flex items-center mb-6" action="" >
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        className="flex-1 p-4 border-2 border-lime-500 rounded-l-xl focus:outline-none focus:ring-0 focus:ring-lime-300 h-14" // Ensures input height is fixed
                    />
                    <button
                        onClick={addToData}
                        title="Add Task"
                        type="button"
                        className="bg-lime-700 px-5 text-white p-4 rounded-r-xl hover:bg-lime-500 transition duration-300 h-14 group" // Matching height for button
                    >
                        <MdFormatListBulletedAdd className="text-2xl group-hover:text-lime-900" />
                    </button>

                </form>




                {/* Task List */}
                <ul className="space-y-4">
                    {
                        datas.map((data) => (

                            <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-200">
                                <div className="flex items-center space-x-4">
                                    <GrCompliance
                                        id="complete"
                                        title="Mark as Completed"
                                        onClick={() => CompleteById(data.id)}
                                        class="text-2xl text-lime-600 hover:text-blue-500 cursor-pointer"
                                    />
                                    <span onClick={() => CompleteById(data.id)} className={`text-xl font-semibold ${data.status ? "line-through text-gray-500" : "text-gray-800"} cursor-pointer`}>{data.list}</span>
                                </div>
                                <div className="flex space-x-4">
                                    {/* Edit Button */}
                                    <button
                                        id="edit"
                                        title="Edit"
                                        onClick={() => EditById(data.id)}
                                        className="text-lime-600 hover:text-yellow-500 transition duration-200 ease-in-out text-2xl">
                                        <FaRegEdit />
                                    </button>
                                    {/* Delete Button */}
                                    <button
                                        id="delete"
                                        title="Delete"
                                        onClick={() => deleteById(data.id)}
                                        className="text-lime-600 hover:text-red-600 transition duration-200 ease-in-out text-2xl">
                                        <MdDelete />
                                    </button>
                                </div>



                                {/* Edit modal */}

                                {isModalOpen && (

                                    <div
                                        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 " // Overlay background and modal container
                                        id="modal"
                                    >
                                        <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                                            {/* Modal Header */}
                                            <div className="flex justify-between items-center border-b pb-3">
                                                <h2 className="text-xl font-bold text-gray-800">
                                                    {/* Modal Title */}
                                                    Edit Task
                                                </h2>
                                                <button
                                                    className="text-gray-400 hover:text-gray-600 transition"
                                                    id="close-modal" // Close modal button
                                                    onClick={closeEditModal}
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                            {/* Modal Body */}
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-lime-500"
                                                    placeholder="Edit your task..." // Input field for editing task
                                                    value={editData.list}
                                                    onChange={(data) =>
                                                        setEditData({...editData,list:data.target.value})
                                                    }
                                                />
                                            </div>
                                            {/* Modal Footer */}
                                            <div className="flex justify-end space-x-3 mt-6">
                                                <button
                                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                                    id="cancel-btn" // Cancel button
                                                    onClick={closeEditModal}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition"
                                                    id="save-btn" // Save button
                                                    onClick={saveEdit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))
                    }
                </ul>

                {/* Clear All Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={clearAllTasks}
                        className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
                    >
                        
                        Clear All
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Todo