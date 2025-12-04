import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import groceryitem from './groceryitem'

function App() {
  return(
    <div>
      <groceryitem name="egg" />
      <groceryitem name="apple" />
      <groceryitem name="cola" />
      <groceryitem name="bread" />
    </div>
  )
}

export default App