import React, { Component } from "react";

export default class AddTodo extends Component {
  state = { todo: "" };
  handleChange = e => this.setState({ [e.target.id]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.state.todo && this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  {/*<label htmlfor="todo">Add todo</label>*/}
                  <input
                    type="text"
                    className="form-control"
                    id="todo"
                    aria-describedby="todo"
                    placeholder="New todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                  />
                  <small id="todo-help" className="form-text text-muted">
                    Add what you are thinking about
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add to list
                </button>
              </form>
            </div>
            <div className="col-md-6">{this.state.todo}</div>
          </div>
        </div>
      </section>
    );
  }
}
