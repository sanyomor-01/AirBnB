import React from "react"
import brand from '../images/airbnb-logo.png'
import '../App.css'

export default function Navbar() {
    return (
        <nav>
            <img src={brand} className="nav--logo" alt="logo"/>
        </nav>
    )
}