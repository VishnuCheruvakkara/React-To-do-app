import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-lime-300 to-lime-700 flex items-center justify-center p-4">
  <div className="bg-white p-6 rounded-md shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">

    <h1 className="text-3xl font-bold text-center text-lime-700 mb-6">
      Todo App
    </h1>

    {/* Input Section */}
    <div className="flex items-center mb-6">
    <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 p-4 border-2 border-lime-500 rounded-l-xl focus:outline-none focus:ring-0 focus:ring-lime-300 h-14" // Ensures input height is fixed
      />
      <button
        className="bg-lime-700 text-white p-4 rounded-r-xl hover:bg-lime-500 transition duration-300 h-14" // Matching height for button
      >
        <i className="fas fa-plus-circle text-1xl"></i>
      </button>
    </div>

    {/* Task List */}
    <ul className="space-y-4">
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
      {/* Task Item 1 */}
      <li className="flex items-center justify-between border-b border-gray-200 py-4 px-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-lime-100">
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="text-green-500" />
          <span className="text-xl font-semibold text-gray-700">Sample Task 1</span>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out">
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </ul>

    {/* Clear All Button */}
    <div className="mt-8 text-center">
      <button
        className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
      >
        Clear All
      </button>
    </div>
  </div>
</div>

   
    </>
  )
}

export default App
