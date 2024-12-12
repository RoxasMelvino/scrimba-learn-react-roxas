import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"
import './App.css'

function App() {

  const cards = data.map(item => {
    return (
      <Card 
          key={item.id}
          {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="experiencesContainer">
        {cards}
      </section>
    </div>
  )
}

export default App
