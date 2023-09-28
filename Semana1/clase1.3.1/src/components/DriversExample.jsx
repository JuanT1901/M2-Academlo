import Driver from "./Driver"

const DriversExample = () => {
  return (
    <div className="containerDrivers">

      <h2>Lista de pilotos</h2>
      <Driver title='Fernando Alonso' image='/img/alonso.jpeg'/>
      <Driver title='Sergio Pérez' image='/img/checo.jpeg'/>
      <Driver title='Lando Norris' image='/img/lando.jpeg'/>
      <Driver title='Max Verstappen' image='/img/max.jpeg'/>

    </div>
  )
}
export default DriversExample