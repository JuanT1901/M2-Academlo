import { useState } from "react";
import Pilot from "./Pilot";

const initialPilots = [
  {
    id: 1,
    name: "Alonso",
    image: "/alonso.jpeg",
  },
  {
    id: 2,
    name: "Checo",
    image: "/checo.jpeg",
  },
  {
    id: 4,
    name: "Max",
    image: "/max.jpeg",
  },
];

const ListExample2 = () => {
  const [pilots, setPilots] = useState(initialPilots);

  const handleAddPilot = () => {
    const newPilot = {
        id: 3,
        name: "Lando",
        image: "/lando.jpeg",  
    }
  const copyPilot = [...pilots, newPilot]
    setPilots(copyPilot);
  }
  return (
    <div>
      <h2>Listado de pilotos</h2>

      <ul>
        {pilots.map((pilot) => (
          <Pilot key={pilot.id} pilot={pilot} />
        ))}
      </ul>
      <button disabled={pilots.length >= 4} onClick={handleAddPilot}>Agregar piloto</button>
    </div>
  );
};
export default ListExample2;
