import React from "react"
import hero_logo from '../images/photo-grid.png';
import '../App.css'


export default function Hero() {
    return (
        <section className="hero">
            <img src={hero_logo} className="hero--photo" alt="" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}