import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>COUNTER</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count +1)}>up</button>
      <button onClick={() => setCount(count -1)}>down</button>
      <button onClick={() => setCount(0)}>zero</button>
    </div>
  )
}