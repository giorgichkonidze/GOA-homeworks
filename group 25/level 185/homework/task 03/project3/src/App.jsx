import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("rendered")
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>plus</button>
    </div>
  )
}
 
export default App;