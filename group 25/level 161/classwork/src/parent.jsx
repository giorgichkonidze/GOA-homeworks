import child from "./child"

function parent() {
    const number = 15
    const str = "hello giorgi"
    const arr = [1, 2, 3, 4, 5]

    return (
        <div>
            <child 
                numprop = {number}
                string = {str}
                array = {arr}
            />
        </div>
    )
}
export default parent