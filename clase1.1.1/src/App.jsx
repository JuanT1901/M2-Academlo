import './App.css'

function App() {
  //Parte lógica

  const handleClick = () => {
    console.log('Juan Diego Torres Escárraga')
  }

  //TODO Mostrar una alerta al dar click en cualquier parte del contenedor de la información.

  const handleCard = () => {
    alert(document.querySelector('.card>h2').innerHTML)
  }

  //Parte visual
  return (
    <>
      <article className='card' onClick={handleCard}>
        <h2>Personal</h2>
        <ul>
          <li onClick={handleClick}><b>Nombre:</b> Juan Torres</li>
          <li><b>Edad:</b> 24 años</li>
          <li><b>Película:</b> Gran Turismo</li>
          <li><b>Música favorita:</b> Salsa</li>
        </ul>
      </article>    
    </>
  )
}

export default App
