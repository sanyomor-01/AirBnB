import React from 'react';
import katie from "../assets/katie-zaferes.png"
import star from "../assets/star.png"


export default function Card() {
    return (
        <div className="card">
            <img src={katie} alt="katie pic" className='card--image'/>

            <div className="card--stats">
                <img src={star} alt="rate star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / Person</p>

        </div>
    )
}