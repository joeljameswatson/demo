import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { checkPropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FilterLink from "../containers/FilterLink";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.grow}>
          Todo App
        </Typography>
        <FilterLink filter="all">All</FilterLink>
        <FilterLink filter="active">Active</FilterLink>
        <FilterLink filter="completed">Completed</FilterLink>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
