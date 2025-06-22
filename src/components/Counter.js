import { useSelector, useDispatch } from "react-redux";
import { counterSliceActions } from "../store/index.js";
import classes from "./Counter.module.css";

const Counter = () => {
  function fetchReduxStateCounterData(state) {
    return state.counter;
  }

  function fetchReduxStateVisibleCounter(state) {
    return state.counterVisible;
  }

  // fetchReduxStateData  funciton will be executed by react-redux since
  const counter = useSelector(fetchReduxStateCounterData);

  //we can use mutliple times the useSelector to find the chunk of required state from store
  const showCounter = useSelector(fetchReduxStateVisibleCounter);

  // useDispatch doesnt accepts any argument but it returns a function, which will dispatch
  // a function against a redux store
  const dispatch = useDispatch();

  function handleIncrementButtonClick() {
    // dispatch({type : "INCRESEMENT"});

    //while using redux toolkit since we define method instead of if statment the redux toolkit will return
    //those method in the actions and we can use those method to perfom our logic
    dispatch(counterSliceActions.increment()); //increment is method defined as reducer under counterSlice and here we are importing them in actions
  }

  function handleDecrementButtonClick() {
    // dispatch({type : "DECREASEMENT"});  //replacing with below method
    dispatch(counterSliceActions.decrement());
  }

  function handleIncreseButtonClick() {
    //  dispatch({type : "INCREASE", factor: 5})  //replacing with below method
    dispatch(counterSliceActions.increase({ factor: 5 })); //of course factor can also be dynamic and can be taken into consideration by using input box
  }

  function handleCounterToggleClickEvent() {
    //  dispatch({type: "TOGGLE_COUNTER"})  //replacing with below method
    dispatch(counterSliceActions.toggle());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrementButtonClick}>Increment</button>
        <button onClick={handleIncreseButtonClick}>Increment By 5</button>
        <button onClick={handleDecrementButtonClick}>decrement</button>
      </div>
      {/* challenge is to show the counter only by clicking on the toggle button
      Sol -  we can pass multiple state to redux reducer and fetch back to show the counter
      */}
      <button onClick={handleCounterToggleClickEvent}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
