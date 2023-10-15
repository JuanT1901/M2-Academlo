import useFetch from "../hooks/useFetch";


const Pokemon = () => {
  const { data: pokemonInfo } = useFetch("https://pokeapi.co/api/v2/pokemon/pikachu/");

  return (
    <div>
      <div>
        <img
          src={pokemonInfo?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </div>

      <h2>{pokemonInfo?.name}</h2>
    </div>
  );
};
export default Pokemon;
