import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>

      <h2>Time: {time}</h2>
    </div>
  )
}

export default App;