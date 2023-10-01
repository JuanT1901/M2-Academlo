import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [isDead, setIsDead] = useState(false);

  const handleShowCard = () => {
    setIsDead(!isDead);
  }

  return (
    <main>
      {isDead ? <h2>Ta morido</h2> : <Card />}
      <button onClick={handleShowCard}>Life / Dead</button>
    </main>
  )
}

export default App