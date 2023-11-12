import React from 'react';
import logo from "../assets/airbnb-logo.png"

export default function Nav() {
    return (
        <nav className="Nav">
            <img src={logo} alt="airbnb-logo" />
        </nav>
    )
}