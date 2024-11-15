import React from "react";
import Airbnblogo from "../assets/airbnb-logo.png"

export default function Navbar () {
    return (
        <nav>
            <img src={Airbnblogo} className="nav--icon" />
        </nav>
    )
}