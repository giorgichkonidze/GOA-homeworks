import { useState } from "react";

function SimpleListAdder() {
  const [text, setText] = useState("")

  const [list, setList] = useState([])

  const addItem = () => {
    if (text.trim() === "") return

    setList([...list, text])


    setText("")
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {/* list-ის რენდერი map()-ით */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SimpleListAdder