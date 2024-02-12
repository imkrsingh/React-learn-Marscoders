const LearnEvent = () => {
    const handleClick1 = (e) => {
        e.preventDefault()
        console.log("Button Clicked 1");
        //document.write("Button Clicked 1")
    }

    const handleClick2 = (MyID) => {
        console.log("Button Clicked 2", MyID);
    }
    return (
        <>
            {/* Without Argument */}
            <button onClick={handleClick1}>Click 1</button>

            {/* With Argument */}
            <button onClick={(e) => { handleClick2("Empty12345") }} >Click 2</button>
        </>
    )
}

export default LearnEvent