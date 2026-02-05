// მაგალით :

import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Number: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                UP
            </button>
        </div>
    )
}
export default Counter