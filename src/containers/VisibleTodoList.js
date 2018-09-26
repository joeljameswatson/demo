import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(t => t.completed);
    case "active":
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state, { match: { params } }) => ({
  todos: getVisibleTodos(state.todos, params.filter || "all")
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
