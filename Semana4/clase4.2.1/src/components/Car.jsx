import { IconCar } from "@tabler/icons-react"
import { IconCircleMinus, IconEdit } from "@tabler/icons-react"

const Car = ({ carInfo, deleteCar, handleClickUpdate }) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-3">
      <h5 className="flex gap-2 items-center text-lg font-bold"><IconCar /> {carInfo.brand} - {carInfo.model}</h5>
      <ul className="grid gap-1 text-gray-600">
        <li><span className="font-semibold">Color:</span> {carInfo.color}</li>
        <li><span className="font-semibold">Año:</span> {carInfo.year}</li>
        <li><span className="font-semibold">Precio:</span> {carInfo.price}</li>
      </ul>
      <div className="flex gap-2 justify-end ">
        <button onClick={() => handleClickUpdate(carInfo)} className="bg-yellow-300 p-1 rounded-md hover:bg-yellow-500 transition-colors">
          <IconEdit />
        </button>
        <button onClick={() => deleteCar(carInfo.id)} className="bg-red-500 p-1 rounded-md hover:bg-red-600 transition-colors">
          <IconCircleMinus />
        </button>
      </div>
    </article>
  )
}
export default Car