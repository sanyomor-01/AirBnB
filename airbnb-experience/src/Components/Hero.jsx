import React from 'react';
import hero from "../assets/photo-grid.png"

export default function Hero() {
    return (
        <section className='hero'>
        
            <img src={hero} alt="photo-grid" className='hero--photo' />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='p--test'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    
        </section>
    )
}