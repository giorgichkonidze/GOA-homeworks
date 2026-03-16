import { useState } from "react";

function Input() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div>

      <form>
        <input
          type="text"
          placeholder="email"
          onChange={handleEmail}
          value={email} />

        <input
          type="password"
          placeholder="password"
          onChange={handlePassword}
          value={password} />
      </form>

      <h3>Email is: {email}</h3>
      <h3>Password is: {password}</h3>

    </div>
  );
}
export default Input