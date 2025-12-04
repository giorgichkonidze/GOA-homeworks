import React from "react"

function workoutitem({name}) {
    const handleClick =  () => {
        alert(`workout added: ${name}`)
    }
    return <button onClick={handleClick}>{name}</button>
}

export default workoutitem;