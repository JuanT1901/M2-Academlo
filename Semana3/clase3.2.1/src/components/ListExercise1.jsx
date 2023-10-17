import { useEffect, useState } from "react"
import axios from "axios"
import User from "./User"

const ListExercise1 = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=15")
    .then(({ data }) => setUsers(data.results))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h2>Listado de usuarios</h2>
      <ul>
        {
          users?.map((user) => (
            <User key={user.email} user={user} />
          ))
        }
      </ul>
    </div>
  )
}
export default ListExercise1