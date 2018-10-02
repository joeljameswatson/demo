import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import * as actions from "../actions";

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
    return (
      <div>
        <form>
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
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(AddTodo);
