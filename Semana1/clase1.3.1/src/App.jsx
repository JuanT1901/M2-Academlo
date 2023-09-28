import "./App.css";
import Card from "./components/Card";
// import DriversExample from "./components/DriversExample";

function App() {
  return (
    <main className="container">
      <Card title='Sobre mi' item1='Juan Torres' item2='24 años' item3='Colombiano' background='#12ca61'/>
      <Card title='Mis hobbies' item1='F1' item2='Futbol' item3='Leer' background='#a3554d'/>
      <Card title='En mi tiempo libre me gusta' item1='Leer' item2='Comer' item3='Salir con amigos' background='#7b9fc1'/>
      <Card title='Mi comida favorita' item1='Pasta' item2='Puré de papa' item3='Hamburguesa' background='#d88564'/>
      <Card title='Mi stack es' item1='HTML' item2='CSS' item3='Javascript' background='#c9c273'/>
      {/* <DriversExample /> */}
    </main>
  );
}

export default App;
