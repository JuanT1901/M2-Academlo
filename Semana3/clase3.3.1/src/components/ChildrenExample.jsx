import CardContainer from "./CardContainer"
import "./ChildrenExample.css"

const ChildrenExample = () => {
  return (
    <section className="container">

      {/* <div className="card">
        <h2>Piloto</h2>
        <div>
          <img src="/max.jpeg" alt="" />
        </div>
        <span>Max Verstappen</span>
      </div> */}

      <CardContainer title="Piloto">
        <div>
          <img src="/max.jpeg" alt="" />
        </div>
        <span>Max Verstappen</span>
      </CardContainer>

      {/* <div className="card">
        <h2>Lista de cosas por hacer</h2>
        <ul>
          <li>Repasar listas de React</li>
          <li>Practicar con APIs</li>
          <li>Repasar estados en React</li>
        </ul>  
      </div> */}

      <CardContainer title="Lista de cosas por hacer">
        <ul>
          <li>Repasar listas de React</li>
          <li>Practicar con APIs</li>
          <li>Repasar estados en React</li>
        </ul>  
      </CardContainer>

      {/* <div className="card">
        <h2>Texto random</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut illum, deleniti omnis nobis totam ratione velit libero mollitia consequatur reprehenderit nemo quasi facilis quia, rem sapiente laudantium harum fugit.</p>
      </div> */}

      <CardContainer title="Texto random">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut illum, deleniti omnis nobis totam ratione velit libero mollitia consequatur reprehenderit nemo quasi facilis quia, rem sapiente laudantium harum fugit.</p>
      </CardContainer>
    </section>
  )
}
export default ChildrenExample