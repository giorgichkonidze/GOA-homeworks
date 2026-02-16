import { useState } from "react"

function NameList() {
  const [names, setNames] = useState([])

  const handleAdd = () => {
    setNames(prev => [...prev, "John"])
  }

  const handleDelete = (indexToDelete) => {

    setNames(prev =>
      prev.filter((_, index) => index !== indexToDelete)
    )
  }

  return (
    <div>
      <button onClick={handleAdd}>Add John</button>

      <ul>
        {names.map((name, index) => (
          <li
            key={index}
            onClick={() => handleDelete(index)}
            style={{ cursor: "pointer" }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default NameList