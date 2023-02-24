const actions = [
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "decrement", payload: 1 },
];

const initialState = {
  value: 0,
};
const counteReducer = (state, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

const finalResult = actions.reduce(counteReducer, initialState);

console.log(finalResult);
