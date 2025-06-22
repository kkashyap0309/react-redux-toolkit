// import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

//configure store is use to assigne the reduce to redux store when using redux toolkit
import { configureStore } from "@reduxjs/toolkit";

//create a reducer function and attach to store created below

// function counterReducer(state = { counter: 0, counterVisible: true }, action) {
//   if (action.type === "TOGGLE_COUNTER") {
//     return {
//       counter: state.counter,
//       counterVisible: !state.counterVisible,
//     };
//   }
//   if (action.type === "INCRESEMENT") {
//     return { counter: state.counter + 1, counterVisible: state.counterVisible };
//   }

//   if (action.type === "DECREASEMENT") {
//     return { counter: state.counter - 1, counterVisible: state.counterVisible };
//   }

//   // Instead of writing  a method for each factor of increament , we need to send payload to
//   // reducer's action  identify them and increase the value by that factor
//   if (action.type === "INCREASEBY5") {
//     return { counter: state.counter + 5, counterVisible: state.counterVisible };
//   }

//   // accept the payload sent and only increase by that factor
//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.factor,
//       counterVisible: state.counterVisible,
//     };
//   }
//   return state;
// }

//create redux store
// const store = createStore(counterReducer);

//---------------------  Impelmenting Redux Tool Kit to achieive above fuctionality -----------------//

const initialState = { counter: 0, counterVisible: true };

// The data managed by redux store can have multiple manged data but since we want a chunk(or slice)  of it so while using the
//redux toolkit we have a method to create a slice
const counterSlice = createSlice({
  name: "counter", //name of the slice
  initialState, //initial state of the reducer
  reducers: {
    // we wrote the if statment and were performing certain actions based on action identifier but
    //  here we add those methods against the identifers
    increment(state) {
      state.counter++; //here state immutability is taken care by redux tool kit
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.factor;
    },
    toggle(state) {
      state.counterVisible = !state.counterVisible;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
export const counterSliceActions = counterSlice.actions;
