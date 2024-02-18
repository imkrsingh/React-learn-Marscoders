/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Pass the data from Child to Parent using event with props
const LearnLiftingStateUp = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        let data = "I am Clild Data"
        props.myClick(data)
    }
  return (
    <>
      <button onClick={handleClick}>Click 1</button>
    </>
  )
}

export default LearnLiftingStateUp
