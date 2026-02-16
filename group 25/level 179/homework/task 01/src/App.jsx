import { useState } from "react"

function ClickCounter() {
  const [count, setCount] = useState(0)

  const handlePlusOne = () => {
    setCount(prev => prev + 1)
  }

  const handlePlusFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prev => prev + 1)
    }
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handlePlusOne}>+1</button>
      <button onClick={handlePlusFive}>+5</button>
    </div>
  )
}

export default ClickCounter