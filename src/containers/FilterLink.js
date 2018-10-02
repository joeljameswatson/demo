import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  link: {
    textDecoration: "none"
  },
  button: {
    color: "white"
  }
};

const FilterLink = ({ filter, children, classes }) => (
  <NavLink
    className={classes.link}
    exact
    to={"/" + (filter === "all" ? "" : filter)}
    activeStyle={{
      textDecoration: "underline",
      color: "white"
    }}
  >
    <Button className={classes.button}>{children}</Button>
  </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(["all", "completed", "active"]).isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(FilterLink);
