import React from "react";
import katie from "../assets/katie-zaferes.png"
import mountain from "../assets/mountain-bike.png"
import star from "../assets/star.png"
import wedding from "../assets/wedding-photography.png"

export default function Card() {
    return (
        <div className="card">
        <img src={katie} className="card--image" />
        <div className="card--stats">
            <img src={star} className="card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <h2>Life Lessons with Katie Zaferes</h2>
        <p><span className="bold">From $136</span> / person</p>
    </div>
    )
}