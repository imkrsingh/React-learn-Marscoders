//// 1st way to write the code
// const x = 5;
// let text = "Goodbye";

// if (x < 20) {     
//     text = "Hello Manish";
// }

// const If = () => {
//     return <h2>{text}</h2>;
// };

// export default If;


//// 2st way to write the code
const If = () => {
  const x = 5;
  let text = "Goodbye";
  if (x < 10) {
    text = "Hello Manish!!!";
  }

  return (
    <h1>{text}</h1>
  );
}

export default If;
