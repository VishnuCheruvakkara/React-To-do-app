
import React, { useState, useEffect } from "react"
//importing mobile nav
import MobileNav from './mobileNav'
//import the head nav 
import HeadNav from './HeadNav'

//Icons used form react-icons, below...
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { IoMdRefreshCircle } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

function Todo() {
    // state sections, down below...
    const [input, setInput] = useState('')
    // storing space,down below...
    const [datas, setData] = useState([])
    //state for track modal open or not 
    const [isModalOpen, setModalOpen] = useState(false)
    //state for edit data 
    const [editData, setEditData] = useState(null)
    //Handle modal error message
    const [modalErrorMessage, setModalErrorMessage] = useState('')
    //Handle inpput error message
    const [inputErrorMessage, setInputErrorMessage] = useState('')

    //load data from the local-storage when componetDidMount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("todoTasks"))
        if (storedData) {
            setData(storedData)
        }
    }, [])
    //Save the data into the local-storage whenever taks are updated | Like componentDidUpdate
    useEffect(() => {
        if (datas.length > 0) {
            localStorage.setItem("todoTasks", JSON.stringify(datas))
        }
    }, [datas])
    //add data inputs in to the data...
    const addToData = () => {
        const trimmedInput = input.trim()
        if (trimmedInput !== '') {
            setData([...datas, { id: Date.now(), list: trimmedInput, status: false }])
            // after adding new data clear the input field for new data 
            setInput('')
            if (errorMessage) {
                setInputErrorMessage("")
            }
        }
        else {
            setInputErrorMessage("Error : Add a valid Task!")
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
    //Save edited tasks...
    const saveEdit = () => {

        if (!editData || !editData.list.trim()) {
            setModalErrorMessage('Error : Please enter a valid task!')
            return;
        }
        const updatedData = datas.map((data) => {
            return data.id === editData.id ? { ...data, list: editData.list } : data
        })
        setData(updatedData)
        setModalOpen(false)
        setEditData(null)
        setModalErrorMessage('')
    }
    //close edit modal 
    const closeEditModal = () => {
        setModalOpen(false)
        setModalErrorMessage('')
    }
    useEffect(() => {
        if (inputErrorMessage) {
            const timer = setTimeout(() => {
                setInputErrorMessage('')
            }, 5000)
        }
    }, [inputErrorMessage])
    return (
        <>
        <HeadNav> </HeadNav>
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

                <form className="flex items-center mb-1" action="" >
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        className="flex-1 p-4 border-2 border-lime-500 rounded-l-xl focus:outline-none focus:ring-0 focus:ring-lime-300 h-14 font-semibold text-gray-700 text-lg" // Ensures input height is fixed
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
                {/* Error Message */}
                {inputErrorMessage && (
                    <div className="mb-2 text-lg text-red-400 font-semibold flex items-center">
                        <MdError className="mr-2 text-2xl" /> {inputErrorMessage}
                    </div>
                )}

                {/* Task List */}
                <ul className="space-y-4 mt-4">
                    {
                        datas.map((data) => (

                            <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-200">
                                <div className="flex min-w-0 items-center space-x-4">
                                    <button
                                        id="complete"
                                        title="Mark as Completed"
                                        onClick={() => CompleteById(data.id)}
                                        class="text-2xl text-lime-600 hover:text-blue-500 cursor-pointer">
                                        <GrCompliance />
                                    </button>

                                    <span onClick={() => CompleteById(data.id)} className={`text-lg font-semibold ${data.status ? "line-through text-gray-400" : "text-gray-700"} cursor-pointe truncate cursor-pointer`}>{data.list}</span>
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
                                                <h2 className="text-xl font-bold text-lime-900 ">
                                                    {/* Modal Title */}
                                                    Edit Task
                                                </h2>
                                                <button
                                                    className="text-lime-900 hover:text-gray-800 transition"
                                                    id="close-modal" // Close modal button
                                                    onClick={closeEditModal}
                                                >
                                                    <GiCancel class="text-xl" />
                                                </button>
                                            </div>
                                            {/* Modal Body */}
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    className="w-full p-3 border-2 border-lime-600 rounded-lg focus:outline-none text-lg font-semibold text-gray-700"
                                                    placeholder="Edit your task..." // Input field for editing task
                                                    value={editData.list}
                                                    onChange={(data) =>
                                                        setEditData({ ...editData, list: data.target.value })
                                                    }
                                                />
                                            </div>
                                            {/* Error Message */}
                                            {modalErrorMessage && (
                                                <div className="mt-1 text-lg text-red-400 font-semibold flex items-center">
                                                    < MdError className="text-2xl mr-2" />{modalErrorMessage}
                                                </div>
                                            )}
                                            {/* Modal Footer */}
                                            <div className="flex justify-end space-x-3 mt-6">
                                                <button
                                                    className="px-2 py-2 text-white rounded-full border border-lime-600 hover:border-gray-700 bg-lime-700 hover:bg-gray-400 hover:text-gray-700 transition duration-300 "
                                                    id="cancel-btn" // Cancel button
                                                    title="Cancel"
                                                    onClick={closeEditModal}
                                                >
                                                    <MdCancel class="text-3xl" />
                                                </button>
                                                <button
                                                    className="px-2 py-2 text-white rounded-full border border-lime-600 hover:border-red-800 bg-lime-700 hover:bg-red-200 hover:text-red-800 transition duration-300 "
                                                    id="save-btn" // Save button
                                                    title="Save"
                                                    onClick={saveEdit}
                                                >
                                                    <IoCheckmarkDoneCircleOutline class="text-3xl" />
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
                        title="Remove All"
                        className="px-2 py-2 text-white rounded-full border border-lime-600 hover:border-red-800 bg-lime-700 hover:bg-red-200 hover:text-red-800 transition duration-300 "
                    >

                        < IoMdRefreshCircle class="text-3xl" />
                    </button>
                </div>
            </div>
        </div>
         {/* load the mobile nav */}
         <MobileNav></MobileNav>

                   
        </>
    )
}
export default Todo