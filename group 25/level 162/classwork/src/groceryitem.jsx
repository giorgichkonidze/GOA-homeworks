import React from "react"

function groceryitem({name}) {
    return (
        <button onClick={()=> alert(`${name}`)}>
            {name}
        </button>
    )
}
export default groceryitem