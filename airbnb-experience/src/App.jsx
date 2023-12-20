import React from "react"
import Navbar from "./Components/Nav"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div className="main">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}