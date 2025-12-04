import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import movieitem from './movieitem'

function App() {
  return (
    <div>
      <h2>movie picker</h2>
      <movieitem title="inspection"/>
      <movieitem title="interstellar"/>
      <movieitem title="the matrix"/>
      <movieitem title="hereditary"/>
    </div>
  )
}

export default App;