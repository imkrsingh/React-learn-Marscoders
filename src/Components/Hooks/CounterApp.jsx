import { useState } from "react"

const CounterApp = () => {
    const [count, setCount] = useState(0)
    const handleCounter = () => {
        //setCount(count + 1)
        //setCount((prevCount) => prevCount + 1);
        if (count < 10) {
            setCount(count + 1);
        }
    }
    const resetCount = () => {
        setCount(0)
    }
    const deCounter = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <h1> Count: {count}</h1>
            <button onClick={handleCounter}>Increase Count</button>
            <button onClick={resetCount}>Reset Count</button>
            <button onClick={deCounter}>Decrease Count</button>
        </>
    )
}

export default CounterApp
