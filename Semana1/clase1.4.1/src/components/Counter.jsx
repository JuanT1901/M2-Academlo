import { useState } from 'react'


const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleSet20 = () => {
    setCounter(20)
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const handleMultiplication = () => {
    setCounter(counter * 5)
  }

  const handleSubtraction = () => {
    setCounter(counter - 2)
  }
  return (
    <main>
      <h1>{counter}</h1>
      <button onClick={handleSet20}>20</button>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMultiplication}>*5</button>
      <button onClick={handleSubtraction}>-2</button>
    </main>
  )
}
export default Counter