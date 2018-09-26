import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getVisibleTodos } from "../reducers";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = (state, { match: { params } }) => ({
  todos: getVisibleTodos(state, params.filter || "all")
});

export default withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);
