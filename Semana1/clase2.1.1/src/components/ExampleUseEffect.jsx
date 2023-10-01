import { useEffect } from "react";
import { useState } from "react";

const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

const getRandomElement = (elements) => {
  const randomIndex = Math.floor(Math.random() * elements.length)
  return elements[randomIndex]
}

const ExampleUseEffect = () => {
  
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);
  const [color, setColor] = useState(getRandomElement(colors));
  
  
  const handleClickPlus = () => {
    setCounter(counter + 1);
  }
  
  const handleClickPlus2 = () => {
    setCounter2(counter2 + 1);
  }
  
  
  useEffect(() => {
    console.log("Esto sólo se ve una vez... ¿O tal vez no?");
  }, [counter2])
  
  useEffect(() => {
    const randomColor = getRandomElement(colors);
    setColor(randomColor)
  }, [counter2])
  
  return (
    <main style={{backgroundColor: color}}>
      <h2>useEffect</h2>
      <h1>{counter}</h1>
      <button onClick={handleClickPlus}>+1</button>
      <hr/>
      <h1>{counter2}</h1>
      <button onClick={handleClickPlus2}>+1</button>
    </main>
  )
}
export default ExampleUseEffect