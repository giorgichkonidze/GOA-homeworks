import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import quiztopic from './quiztopic'

function App() {
  return(
    <div>
      <h2>scinece quiz selectros: </h2>
      <quiztopic topic="pysics"/>
      <quiztopic topic="biology"/>
      <quiztopic topic="chemistery"/>
      <quiztopic topic="astronomy"/>
    </div>
  )
}

export default App;