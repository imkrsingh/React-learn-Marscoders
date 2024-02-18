import { useState } from "react"

const LearnUseSate = () => {
    const [num, setNum] = useState(6)
    console.log("Number:", num);

    const handleNum = () => {
        setNum(9)
    }

    const handlePosition = () => {
        setPosition({ x: 4, y: 6 })
    }

    const [position, setPosition] = useState({ x: 1, y: 2 })
    console.log("Position: ", position);
    return (
        <>
            <h1>Number {num}</h1>
            <button onClick={handleNum}>Change Number</button>
            <h1>Position: {position.x} {position.y}</h1>
            <button onClick={handlePosition}>Change Position</button>
        </>
    )
}

export default LearnUseSate