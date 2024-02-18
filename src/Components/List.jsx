// ///// Code.1
// const ListComponent = () => {

//     const items = ['Apple', 'Banana', 'Orange'];

//     return (
//         <div>
//             <h1>List of Items</h1>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index} style={{ margin: '10px 0', backgroundColor: '#f0f0f0', padding: '5px' }}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ListComponent;

///// Code.2

function Car(props) {
    return <li>I am a {props.brand}</li>;
}

const ListComponent = () => {
    const cars_name = ["Ford", "BMW", "Audi"];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars_name.map((car) => (
                    <Car brand={car} />
                ))}
            </ul>
        </>
    );
};

export default ListComponent;
