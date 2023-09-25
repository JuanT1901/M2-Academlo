import "./App.css";

function App() {
  //Parte lógica

  const personal = {
    title: "Personal",
    nombre: "Juan Torres",
    age: "24 años",
    movie: "Gran Turismo",
    music: "Salsa",
  };

  const handleClick = () => {
    console.log("Juan Diego Torres Escárraga");
  };

  //TODO Mostrar una alerta al dar click en cualquier parte del contenedor de la información.

  const handleCard = () => {
    alert(document.querySelector(".card>h2").innerHTML);
  };

  //Parte visual
  return (
    <>
      <article className="card" onClick={handleCard}>
        <h2>{personal.title}</h2>
        <ul>
          <li onClick={handleClick}>
            <b>Nombre: </b>
            {personal.nombre}
          </li>
          <li>
            <b>Edad: </b> {personal.age}
          </li>
          <li>
            <b>Película: </b> {personal.movie}
          </li>
          <li>
            <b>Música favorita :</b>
            {personal.music}
          </li>
        </ul>
      </article>
    </>
  );
}

export default App;
