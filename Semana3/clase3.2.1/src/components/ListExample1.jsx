const ListExample1 = () => {
  const numbers = [1, 2, 3, 4];

  return (
    <div>
      <h2>Ejemplo de listas 1</h2>

      <span>Sin listas</span>
      <ul>
        <li>{numbers[0]}</li>
        <li>{numbers[1]}</li>
        <li>{numbers[2]}</li>
        <li>{numbers[3]}</li>
      </ul>
      <hr />
      <span>Con listas</span>
      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
    </div>
  );
};
export default ListExample1;
