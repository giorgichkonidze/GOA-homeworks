import React from "react"

function movieitem ({ title }) {
    const handleClick = () => {
        alert (`you added ${title}`)
    }
    return <button onClick={handleClick}>{title}</button>
}

export default movieitem