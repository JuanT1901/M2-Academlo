import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";

const RandomUser = () => {
  
  const [user, setUser] = useState(null)
  const [gender, setGender] = useState("all")

  const getRandomUser = () => {
    axios.get(`https://randomuser.me/api/?gender=${gender}`)
      .then(({ data }) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  }

  useEffect(() => {
    getRandomUser();
  }, [gender]);
   
  return (
    <div>

      <h2>RandomUser</h2>

      <article>
        <header>
          <img src={user ? user.picture.large : ""} alt={user?.name} />
        </header>
        <h4>{user?.name.title} {user?.name.first} {user?.name.last}</h4>
      </article>

      <div>
        <select onChange={handleChangeGender}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <button onClick={getRandomUser}>New User</button>
    </div>
  )
}
export default RandomUser