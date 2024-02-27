import React from "react"

export default function Card(props) {
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "Sold Out"
    } else if(props.location === "Online"){
        badgeText = "Online"
    }
    return (
        <div className="card">
            {/* if badgeText exists */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`./images/${props.coverImg}`)} alt="katie" className="card--image" />
            <div className="card--stats">
                <img src={require("./images/star.png")} alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <hr />
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}