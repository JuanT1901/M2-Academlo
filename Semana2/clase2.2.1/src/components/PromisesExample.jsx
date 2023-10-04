import { useEffect } from "react"
import axios from "axios"

const PromisesExample = () => {
  
  //!Ninguna está mal ni es mejor ni peor, sencillamente es la que prefiramos usar, en el caso de then y catch, pues es más corto y se usa más en el Front, en el caso de async y await, es un poco más largo pero tiene ventajas en el Back

  //*Petición con Fetch, then y catch

  // useEffect(() => {
  //   fetch("https://randomuser.me/api/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
  // }, [])
    
  //* Petición con async await
  //* Función auto invocada, es una función anónima

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch("https://randomuser.me/api/");
  //       const data = await res.json();
  //       console.log(data);
  //     }catch(err){
  //       console.log(err);
  //     }
  //   })()
  // }, [])

  //* Aprendiendo peticiones con Axios

  // useEffect(() => {
  //   const getRandomUser = async () => {
  //     try {
  //       const { data } = await axios.get("https://randomuser.me/api/");
  //       console.log(data);
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }

  //   getRandomUser();
  // }, [])
  
  //*Petición con Axios, then y catch
  useEffect(() => {
    axios.get("https://randomuser.me/api/")
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h2>PromisesExample</h2>
    </div>
  )
}

export default PromisesExample