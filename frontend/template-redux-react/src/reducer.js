const initialState = {
  todos: [],
};

// In Redux, "store" will dispatch action objects to one or more reducer functions
// It is Reducer that does the core job of executing the action

// Remember that reducers have to be pure functions, in order to achieve state predictability
// Do not include API calls, usage tracking metrics and other actions that could introduce side effects

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todos) => todos.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
