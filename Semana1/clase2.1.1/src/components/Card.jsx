import { useEffect } from "react"

const Card = () => {

  useEffect(() => {
    console.log("vivido")
  
    return () => {
      console.log("morido")
    }
  }, [])
  
  return (
    <div>
      <img src="/alonso.jpeg" alt="Fernando Alonso" />
      <h2>Fernando Alonso</h2>
    </div>
  )
}
export default Card