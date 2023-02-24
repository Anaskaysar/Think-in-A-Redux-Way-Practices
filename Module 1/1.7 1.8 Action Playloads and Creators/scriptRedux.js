// Select DOM elements

const countEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//Action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";
const ITEST = "itest";

//Action Creator- is a function that creates the action and return the value
const increment = (value) => {
  return {
    type: INCREMENT, //mandatory
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT, //mandatory
    payload: value,
  };
};

// Initial state

const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
  },
};

// Create Reducer Function-heart of Application

function counterReducer(state = initialState, action) {
  //action will always a JavaScript Object
  if (action.type === INCREMENT) {
    return {
      ...state, //we should not use direct state.value because of immutability always return updated state
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else if (action.type === ITEST) {
    const updatedState = {
      ...state,
      properties: {
        ...state.properties,
        b: state.properties.b + 1,
      },
    };
    return updatedState;
  } else {
    return state;
  }
}

//Create Store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  countEl.innerText = state.value.toString();
};

//Update ui Initially
render();

store.subscribe(render);

//button click listeners

incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
