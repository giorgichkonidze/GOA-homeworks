import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition">
        Hover me
      </button>

      <input
        type="text"
        placeholder="Focus me"
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      
      <button className="bg-green-500 text-white px-4 py-2 rounded active:bg-green-700 active:scale-95">
        Click me
      </button>

      <div className="p-4 border rounded has-[input:focus]:border-blue-500">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="border p-2 w-full rounded"
        />
      </div>
    </div>
  )
}

export default App
