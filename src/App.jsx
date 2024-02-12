// import './App.css'
import Hello from './Components/Hello'
import LearnJSX from './Components/LearnJSX'
import If from './Components/if'
import Ternary from './Components/Ternary'
import LearnProps from './Components/LearnProps'
import Props2 from './Components/LearnProps2'
import LearnEvent from './Components/LearnEvents'
import Football from './Components/LearnEvents2'
import LearnCSSModule, { Headers } from './Components/LearnCSSModule'
import List from './Components/List'



function App() {
let roll = 1001;
  const getData = (data) => {
    console.log(data)
  }
  return (
    <>
      {/* <Hello/>
      <LearnJSX/>
      <If/> */}
      {/* <Ternary/> */}
      {/* <LearnProps name = "Manish Kumar Singh" jack={roll}/> */}
      {/* <Props2/> */}
      {/* <LearnEvent/> */}
      {/* <Football/> */}
      {/* <LearnCSSModule/>
      <Headers/> */}
      <List/>
      
    </>
  )
}

export default App
