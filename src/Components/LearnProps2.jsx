// Code.1

// function Car(props) {
//     return <h2>I am a {props.brand}!</h2>;
// }

// function Garage() {
//     const carName = "Ford";
//     return (
//         <>
//             <h1>Who lives in my garage?</h1>
//             <Car brand={carName} />
//         </>
//     );
// }

// export default Garage;


// Code.2
function Car1(props) {
    return <h2>I am a {props.brand.name}!</h2>;
}

function Car2(props) {
    return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car1 brand={carInfo} />
            <Car2 brand={carInfo}/>
        </>
    );
}

export default Garage;