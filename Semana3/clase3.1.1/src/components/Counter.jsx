import useCounter from "../hooks/useCounter"


const Counter = () => {
  const {counter, handleDecrement, handleIncrement} = useCounter();

  return (
    <div>
      <h2>Contador 1</h2>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  )
}
export default Counter