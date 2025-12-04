import React from "react"

function quiztopic ({ topic }) {
    const handleClick = () => {
        alert(`quiz topic selected: ${topic}`)
    }
    return <button onClick={handleClick}>{topic}</button>
}
export default quiztopic;