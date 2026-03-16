import { useState, useEffect } from "react";
import UsersView from "./Usersview";

function UsersContainer() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setTimeout(() => {
      const data = [
        { id: 1, name: "Nika" },
        { id: 2, name: "Ana" },
        { id: 3, name: "Gio" }
      ]

      setUsers(data);
    }, 2000)
  }, [])

  return <UsersView users={users} />
}

export default UsersContainer;