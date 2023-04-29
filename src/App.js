import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrement ,clear } from "./actions";

function App() {
  const myState = useSelector((state) => state.inc_dec);
  console.log(myState,"Ssssssssssssssss")
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input type="text" value={myState}></input>
      <button onClick={() => dispatch(increase())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      <button onClick={()=>dispatch(clear())}>clear</button>
    </div>
  );
}

export default App;
