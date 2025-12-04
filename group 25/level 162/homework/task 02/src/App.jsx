import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import songitem from "./songitem"

function App() {
  return (
    <div>
      <h2>music playlist</h2>
      <songitem name="blinding lights" />
      <songitem name="levitating" />
      <songitem name="peaches" />
      <songitem name="stay" />
    </div>
  )
}


export default App;