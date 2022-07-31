import { ADD_TASK, CHANGE_IS_DONE, EDIT_TASK } from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "Live a creative life",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Teach my love of art to others ",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Save money ",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "Travel the world",
      isDone: false,
    },{
      id: Math.random(),
      task: "Find true love",
      isDone: false,
    },
    
  ],
};

function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_IS_DONE: {
      return {
        todos: state.todos.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    }
    case EDIT_TASK: {
      return {
        todos: state.todos.map((task) =>
          task.id === payload.id ? { ...task, task: payload.taskText } : task
        ),
      };
    }
    case ADD_TASK: {
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), task: payload, isDone: false },
        ],
      };
    }
    default:
      return state;
  }
}

export default todosReducer;
