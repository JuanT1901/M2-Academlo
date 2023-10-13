import useCounter from "../hooks/useCounter";

const Counter2 = () => {
  const {counter, handleDecrement, handleIncrement} = useCounter(10);

  return (
    <div>
      <h2>Contador 2</h2>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
};
export default Counter2;
