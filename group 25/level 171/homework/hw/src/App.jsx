import './App.css'

function App() {
  return (
    <div>
      <div>
        {/* hover */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">hover button</button>

        <div className="w-32 h-32 bg-gray-300 hover:scale-110 transition">Box</div>

        <p className="hover:text-red-500 cursor-pointer">Hover text</p>

        <div className='h-40 w-32 bg-red-500 hover:scale-110 transition'>hello</div>

        <div className="p-4 hover:shadow-lg border">Card hover</div>


        {/* focus */}
        <input className="border focus:border-red-500 focus:outline-none p-2" placeholder="Focus me" />

        <textarea className="border focus:bg-yellow-100 p-2" />

        <button className="focus:ring-4 focus:ring-green-400">Focus button</button>

        <select className="border focus:text-blue-600"><option>Options</option></select>

        <input className="placeholder-gray-400 focus:placeholder-transparent border p-2" placeholder="Typing..." />


        {/* active */}
        <button className="bg-purple-500 active:bg-purple-800 text-white px-4 py-2">Click me</button>

        <div className="w-24 h-24 bg-gray-400 active:scale-95">Press</div>

        <a href="#" className="active:text-red-500">Active link</a>


        {/* has */}
        <div className="group border p-4 group-hover:border-green-500">
          <button className="bg-gray-200 px-3 py-1">
            Hover child
          </button>
        </div>

        <div className="has-[input:focus]:bg-gray-200 p-4 border">
          <input className="border p-2" />
        </div>
      </div>
    </div>
  )
}
export default App