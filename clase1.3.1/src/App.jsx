import "./App.css";
import Driver from "./components/Driver.jsx";

function App() {
  return (
    <main className="container">
      <h2>Listado de Corredores</h2>

      <Driver />
      
      <article className="piloto">
        <header>
          <img src="/img/checo.jpeg" alt="Sergio Pérez" />
        </header>
        <h4>Sergio {`"Checo"`} Pérez</h4>
      </article>
    </main>
  );
}

export default App;
