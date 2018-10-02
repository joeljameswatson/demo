import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "20px",
    width: "250px"
  }
});

const App = ({ classes }) => {
  return (
    <div>
      <Header />
      <Grid container direction="row" justify="center">
        <Paper className={classes.root}>
          <AddTodo />
          <VisibleTodoList />
        </Paper>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(App);
