import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <div className="flex gap-4 bg-gray-200 p-4">
        <div className="bg-red-400 p-2">A</div>
        <div className="bg-blue-400 p-2">B</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-green-300 p-2">C</div>
        <div className="bg-green-400 p-2">D</div>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow bg-gray-300 p-4">Main</div>
        <div className="bg-gray-400 p-4 w-40">Sidebar</div>
      </div>
      <div className="flex gap-4">
        <div className="order-2 bg-red-300 p-2">Second</div>
        <div className="order-1 bg-blue-300 p-2">First</div>
      </div>
    </div>
  )
}

export default App
