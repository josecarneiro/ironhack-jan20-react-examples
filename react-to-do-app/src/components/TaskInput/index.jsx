import React, { Component } from 'react';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentOfNewTask: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmission(event) {
    event.preventDefault();
    const content = this.state.contentOfNewTask;
    if (!content) return;
    const task = {
      id: Date.now().toString(),
      content
    };
    this.props.addTask(task);
    this.setState({
      contentOfNewTask: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input
          type="text"
          name="contentOfNewTask"
          value={this.state.contentOfNewTask}
          onChange={this.handleInputChange}
          placeholder="Insert task here..."
          autoComplete="off"
        />
        <button>+</button>
      </form>
    );
  }
}

export default TaskInput;
