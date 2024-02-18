import React, { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("_____");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
            <div style={{ color: color, fontSize: "24px"}}>This text will appear in {color} color!</div>
        </>
    );
}

export default FavoriteColor;