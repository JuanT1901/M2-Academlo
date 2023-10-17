const Pilot = ({ pilot }) => {
  return (
    <li>
      <div>
        <img src={pilot.image} alt={pilot.name} />
      </div>
      <span>{pilot.name}</span>
    </li>
  );
};

export default Pilot;
