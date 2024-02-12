//Code.1
// const LearnProps = (props) => {
//     console.log(props);
//     return (
//         <>
//             <h1> This is Props</h1>
//             <h1> {props.name} </h1>
//             <h1> {props.jack} </h1>
//         </>

//     )
// }

// export default LearnProps


// Code.2 | Shorthands props
const LearnProps = ({name, jack}) => {
    
    return (
      <>
        <h1 style={{color:'blue'}}> This is Props</h1>
        <h1> {name} </h1>
        <h1> {jack} </h1>
      </>
      
    )
  }
  
  export default LearnProps