////// Code.1
// import { useState } from 'react';

// const Submit_Form = () => {
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(`The name you entered was: ${name}`);
//     }

//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//           <input 
//             type="text" 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <input type="submit" />
//       </form>
//     )
// }

// export default Submit_Form



///// Code.2

import { useState } from 'react';

const Submit_Form = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>

            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Submit_Form



///// Code.3 || Select

export function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

