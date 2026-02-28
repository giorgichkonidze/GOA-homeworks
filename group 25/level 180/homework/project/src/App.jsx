import { useState } from "react";

function MyForm() {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      {["firstName", "lastName", "email"].map((field) => (
        <input
          key={field}
          type={field === "email" ? "email" : "text"}
          name={field}
          value={state[field] || ""}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;