import Navbar from "./components/Navbar.jsx"
import Journal from "./components/Journal.jsx"
import data from "./data.js"

import './App.css'

function App() {

  const articles = data.map(item => {
    return (
      <Journal
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="page">
      <Navbar />
      <section className="journal__section">
        {articles}
      </section>
    </div>
  )
}

export default App
