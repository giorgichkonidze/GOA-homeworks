import { useState } from "react";

function App() {
  const [data, setData] = useState([])

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json()) 
      .then(users => setData(users))
  }
  return (
    <div>
      <button onClick={getUser}> get users </button>

      {data.map(user => (
        <p key = {user.id}>{user.name}</p>
      ))}
    </div>
  )
}
export default App;