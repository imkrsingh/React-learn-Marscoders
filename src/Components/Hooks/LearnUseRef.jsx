import React, { useRef } from 'react';

const Counter = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>Counter</h2>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
};

export default Counter;
