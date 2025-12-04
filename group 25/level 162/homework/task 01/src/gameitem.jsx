import React from "react";

function gameitem ({name}) {
    const handleClick = () => {
        alert(`you selected {name}`)
    }
    return <button onClick={handleClick}>{name}</button>
}

export default gameitem