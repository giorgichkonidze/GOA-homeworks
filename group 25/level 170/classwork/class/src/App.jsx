import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 text-center">

        <img
          src="./image 21.jpg"
          alt="example"
          className="rounded-lg mb-4 w-full h-auto"
        />

        <h1 className="text-2xl font-bold mb-2">
          goa
        </h1>

        <p className="text-gray-600 mb-4">
          responsive wensite
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
          click me
        </button>

      </div>

    </div>
  )
}

export default App