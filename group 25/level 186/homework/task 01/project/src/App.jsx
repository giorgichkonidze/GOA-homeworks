import { useState, useEffect, useEffectEvent } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  const logCount = useEffectEvent(() => {
    console.log(count)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      logCount()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count +1)}> PLUS </button>
    </div>
  )
}
export default Counter;