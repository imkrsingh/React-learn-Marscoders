// eslint-disable-next-line no-unused-vars
let model = "G40"

const LearnJSX = () => {
    return (
        <>
            {/* JavaScript Expression in JSX */}
            <h1>Learn JSX {3 + 6}</h1>
            <h1> Motorola {model} </h1>

            {/* Attributes in JSX */}
            <h1 className="bg-primary">Learn JSX 3</h1>
            <h1 className={model}> Learn JSX 4</h1>
        </>
    )
}

export default LearnJSX