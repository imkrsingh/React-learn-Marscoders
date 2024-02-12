///// Code.1

// const Ternary = () => {
//     const x = 5;
//   return (
//   <h2>{x < 10 ? "Good Morning" : "GoodBye"}</h2>
//   )
// }

// export default Ternary


////// Code.2

  function MissedGoal() {
    return <h1>MISSED!</h1>;
  }

  function MadeGoal() {
    return <h1>GOAL!</h1>;
  }

const Ternary =  function Goal(props) {
    const isGoal = props.isGoal;
    return (
      <>
        {isGoal ? <MissedGoal /> : <MadeGoal /> }
      </>
    );
  }

export default Ternary
