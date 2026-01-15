import './App.css'

function App() {
  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Responsive ტექსტი
      </h1>
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 bg-gray-200">
        Responsive Padding
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 bg-blue-300">
        Responsive სიგანე
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-red-300 p-4">Box 1</div>
        <div className="bg-green-300 p-4">Box 2</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4">1</div>
        <div className="bg-gray-300 p-4">2</div>
        <div className="bg-gray-300 p-4">3</div>
      </div>
    </div>
  )
}

export default App