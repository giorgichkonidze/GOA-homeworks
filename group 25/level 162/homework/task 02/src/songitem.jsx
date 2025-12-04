import React from "react";

function songitem({name}) {
    const handleClick = () => {
        alert(`now playing: ${name}`)
    }
    return <button onClick={handleClick}>{name}</button>
}

export default songitem