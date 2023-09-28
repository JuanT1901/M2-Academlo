import { useState } from "react";
import "./Bulb.css"

const Bulb = () => {

  const [light, setLight] = useState(false);

  const handleLight = () => {
    setLight(!light)
  }
  

  return (
    <div>
      <h1>Light Bulb Exercise</h1>
      <div className={`bulb ${light ? "on" : ""}`}></div>
      <button className="option" onClick={handleLight}>{light ? "Off" : "On"}
      </button>
    </div>
  )
}
export default Bulb