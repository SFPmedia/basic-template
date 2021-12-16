import axios from "axios";

export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3000/todos");
    dispatch({
      type: "SET_TODOS",
      payload: response.data,
    });
  };
};

export const postTodo = (todo) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3000/todos", todo);
    dispatch({
      type: "ADD_TODO",
      payload: response.data,
    });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(`http://localhost:3000/todos/${id}`);
    dispatch({
      type: "DELETE_TODO",
      payload: response.id,
    });
  };
};
