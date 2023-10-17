const User = ({ user }) => {
  return (
    <li>
      <div >
        <img src={user.picture.large} alt="" />
      </div>
        <span>Name: {user.name.title} {user.name.first} {user.name.last}</span>
        <br />
        <span>Mail: {user.email}</span>
        <br />
        <span>Gender: {user.gender}</span>
    </li>
  )
}
export default User