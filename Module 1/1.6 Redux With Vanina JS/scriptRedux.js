// Select DOM elements

const countEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initial state

const initialState = {
  value: 0,
};

// Create Reducer Function-heart of Application

function counterReducer(state = initialState, action) {
  //action will always a JavaScript Object
  if (action.type === "increment") {
    return {
      ...state, //we should not use direct state.value because of immutability always return updated state
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
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
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
