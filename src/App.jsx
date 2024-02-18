// import './App.css'
import Hello from "./Components/Hello";
import LearnJSX from "./Components/LearnJSX";
import If from "./Components/if";
import Ternary from "./Components/Ternary";
import LearnProps from "./Components/LearnProps";
import Props2 from "./Components/LearnProps2";
import LearnEvent from "./Components/LearnEvents";
import Football from "./Components/LearnEvents2";
import LearnCSSModule, { Headers } from "./Components/LearnCSSModule";
import List from "./Components/List";
import Key from "./Components/Key";
import Forms from "./Components/Forms";
import Submit_Form, { MyForm } from "./Components/Submit_Form";
import LearnLiftingStateUp from "./Components/LearnLiftingStateUp";
import FavoriteColor from "./Components/Hooks/LearnUseState";
import LearnUseSate from "./Components/Hooks/LearnUseState2";
import CounterApp from "./Components/Hooks/CounterApp";
import LearnMap from "./Components/LearnMap";
import LearnUseEffect from "./Components/Hooks/LearnUseEffect";
import LearnUseContext from "./Components/Hooks/LearnUseContext";
import LearnUseRef from "./Components/Hooks/LearnUseRef";
import LearnUseReducer from "./Components/Hooks/LearnUseReducer";
import LearnUseMemo from "./Components/Hooks/LearnUseMemo";
import LearnUseCallback from "./Components/Hooks/LearnUseCallback";


function App() {
  let roll = 1001;
  const getData = (data) => {
    console.log(data);
  };
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
      {/* <List /> */}
      {/* <Key/> */}
      {/* <LearnMap/> */}
      {/* <Forms/>
      <Submit_Form/>
      <MyForm/> */}
      {/* <LearnLiftingStateUp myClick={getData}/> */}
      {/* <FavoriteColor/> */}
      {/* <LearnUseSate/> */}
      {/* <CounterApp/> */}
      {/* <LearnUseEffect/> */}
      {/* <LearnUseContext/> */}
      {/* <LearnUseRef/> */}
      {/* <LearnUseReducer/> */}
      {/* <LearnUseMemo/> */}
      <LearnUseCallback/>
    </>
  );
}

export default App;
