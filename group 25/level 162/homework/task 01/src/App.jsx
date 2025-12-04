import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gameitem from "./gameitem"

function App() {
  return (
    <div>
      <h2>game selector</h2>
      <gameitem name="minecraft" />
      <gameitem name="fortnite" />
      <gameitem name="CS: GO" />
      <gameitem name="Valorant" />
    </div>
  )
}

export default App