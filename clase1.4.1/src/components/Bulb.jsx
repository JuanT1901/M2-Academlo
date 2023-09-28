import { useState } from "react";

const Bulb = () => {

  const [light, setLight] = useState(false);
  const [option, setOption] = useState("OFF")


  const handleTitle = () => {
    if(option === "OFF") {
      setOption("ON")
      setLight(true)
    } else {
      setOption("OFF")
      setLight(false)
    }
  }
  

  return (
    <div>
      <h1>Light Bulb Exercise</h1>
      <div className="Bulb" style={{backgroundColor: light ? "yellow" : "gray",
      }}>
      </div>
      <button onClick={(handleTitle)}>{option}
      </button>
    </div>
  )
}
export default Bulb