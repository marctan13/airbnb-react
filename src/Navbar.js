import React from "react"

export default function Navbar(props) {
    return (
        <nav>
            <img src={props.img} alt="airbnb logo" className="nav--logo" />
        </nav>
    )
}