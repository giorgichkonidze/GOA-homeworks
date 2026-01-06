const App = () => {
  return (
    <div>
      <button className="bg-blue text-color-white px-4 rounded hover:bg-blue-700">
        Hover
      </button>
      <p className="border p-2 rounded focus:border-blue focus:outline-none">
      </p>
      <button className="bg-blue px-4 py-2 text-white rounded active:scale-95 transition">
      Press Me
      </button>
      <div className="border p-3 rounded has-[input:focus]:border-blue-500">
        <input className="outline-none" placeholder="Focus me" />
      </div>
    </div>
  )
} 
export default App