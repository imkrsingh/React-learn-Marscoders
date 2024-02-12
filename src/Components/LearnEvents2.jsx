// Code.1
// function Football() {
//     const shoot = () => {
//       alert("Great Shot!");
//     }
  
//     return (
//       <button onClick={shoot}>Take the shot!</button>
//     );
//   }

// export default Football


// Code.2
function Football() {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
  }

export default Football
