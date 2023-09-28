import { useState } from "react";

const Pilots = () => {
  const [togglePilot, setTogglePilot] = useState(false);

  const handleChangePilot = () => {
    setTogglePilot(!togglePilot);
  };

  return (
    <main>
      <div>
        {
        togglePilot ? (
          <div>
            <img src="/checo.jpeg" alt="Checo Pérez" />
          </div>
        ) :
        (
          <div>
            <img src="/max.jpeg" alt="Max Verstappen" />
          </div>
        )
        }
      </div>
      <button onClick={handleChangePilot}>Cambiar piloto</button>
    </main>
  );
};

export default Pilots;
