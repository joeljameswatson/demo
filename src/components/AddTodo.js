import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../actions";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  addTodo = () => {
    if (!this.state.value.trim()) {
      return;
    }
    this.props
      .addTodo(this.state.value)
      .then(() => this.setState({ value: "" }));
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root}>
        <TextField
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.addTodo();
              e.preventDefault();
            }
          }}
          label="Add a 'todo'"
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          margin="normal"
        />
        <Button
          onClick={this.addTodo}
          aria-label="Add"
          variant="fab"
          color="primary"
        >
          <AddIcon />
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(
  connect(
    null,
    actions
  )(AddTodo)
);
