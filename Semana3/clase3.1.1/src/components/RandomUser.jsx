import useFetch from "../hooks/useFetch";

const RandomUser = () => {
  const { data } = useFetch("https://randomuser.me/api/")
  const user = data?.results[0];

  return (
    <div>
      <div>
        <img src={user?.picture.large} alt="" />
      </div>
      <h2>{user?.name.first} {user?.name.last}</h2>
    </div>
  );
};
export default RandomUser;
