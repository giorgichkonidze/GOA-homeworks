import { useState } from "react";

function SimpleListAdder() {
  const [inputValue, setInputValue] = useState("");

  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;

    setList([...list, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task..."
      />

      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleListAdder