import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import workoutitem from './workoutitem'

function App() {
  return (
    <div>
      <h2>Workout Planner</h2>
      <workoutitem name="push-up"/>
      <workoutitem name="squats"/>
      <workoutitem name="plank"/>
      <workoutitem name="burpees"/>
    </div>
  )
}

export default App