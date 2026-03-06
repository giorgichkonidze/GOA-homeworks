import { useState, useEffect, useEffectEvent } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)

  const time = useEffectEvent(() => {
    setCount(x => x + 1)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      time()
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log("clear interval")
    }
  }, [])
  return <h1>{count}</h1>
}