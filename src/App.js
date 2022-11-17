// import { createStore } from "redux";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions/counter";

function App() {
  const counter = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();
  let newValue = 5;
  return (
    <div className="App">
      <header className="App-header">
        <h3>Redux Tutorial</h3>
        <h3>Counter : {counter} </h3>
        <div className="btn">
          <button
            onClick={() => {
              dispatch(increment(newValue));
            }}
          >
            +
          </button> &nbsp;
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
