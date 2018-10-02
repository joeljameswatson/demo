import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import { getVisibleTodos, getErrorMessage, getIsFetching } from "../reducers";
import * as actions from "../actions";
import TodoList from "../components/TodoList";
import FetchError from "../components/FetchError";

const styles = theme => ({
  progress: {
    display: "flex",
    justifyContent: "center"
  }
});

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { isFetching, errorMessage, toggleTodo, todos, classes } = this.props;
    if (isFetching && !todos.length) {
      return (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      );
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || "all";
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleTodoList)
);

export default withStyles(styles)(VisibleTodoList);
