////// Code.1
// const Forms = () => {
//     return (
//         <form>
//             <label>Enter your name:
//                 <input type="text" />
//             </label>
//         </form>
//     )
// }

// export default Forms


////// Code.2
import { useState } from "react";
const Forms = () => {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}

export default Forms