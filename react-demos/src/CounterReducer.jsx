const intialState = { count: 0 };

function CounterReducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "add5":
      return { ...state, count: state.count + 5 };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "sub5":
      return { ...state, count: state.count - 5 };
    case "addByAmount":
      return { ...state, count: state.count + action.payload };

    case "subByAmount":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
}
export { intialState, CounterReducer };
