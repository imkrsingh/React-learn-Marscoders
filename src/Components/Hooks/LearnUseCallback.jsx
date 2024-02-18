import React, { useState, useCallback } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // Define a callback function that increments the count
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    // Define a callback function that decrements the count
    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
