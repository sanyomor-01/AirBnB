import React from 'react';
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"
import './App.css'

function App() {

  const cardElements = data.map( (data) =>{
    return <Card
     img = {data.coverImg}
     title = {data.title}
     price = {data.price}
     rating ={data.stats.rating}
     location ={data.location}reviewCount = {data.stats.reviewCount} 
    />
  } )
  return (
      <div>
          <Nav/>
          <Hero/>
          <section className="cards--list">
              {cardElements}
          </section>
      </div> 
  )
}

export default App
