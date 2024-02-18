import { useEffect, useState } from "react"

const LearnUseEffect = () => {

    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }

    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 to 100
        setRandomNumber(newRandomNumber);
    };

    useEffect(() => {
        console.log("useEffect called");
        return () => {
            console.log("Component will unmount !!");
        }
    }, [count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleCount}>Increase Count</button>
            <hr />
            <h2>Random Number: {randomNumber}</h2>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    )
}

export default LearnUseEffect
