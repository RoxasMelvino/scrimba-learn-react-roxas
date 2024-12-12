import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"
import './App.css'

function App() {

  const cards = data.map(e => {
    return (
      <Card 
          img={e.coverImg}
          rating={e.stats.rating}
          reviewCount={e.stats.reviewCount}
          country="Online"
          title={e.title}
          price={e.price}
      />
    )
  })

  console.log(cards);

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
