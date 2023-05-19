import React from "react";
import '../styles/Card.css'

export default function Card({ img, tt, where }) {
    return (
        <>
            <div className="card-container">
                <a href={where}>
                    <div className="card-header">
                        <hr></hr>
                    </div>
                    <div className="card-img">
                        <img src={img} alt={tt}></img>
                    </div>
                    <div className="card-title">
                        <h3>{tt}</h3>
                    </div>
                </a>
            </div>


        </>


    )
}