import React, { Component } from 'react';
import './App.css';

import TaskList from './components/TaskList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      contentOfNewTask: '',
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleInputChange(event) {
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  addTask(event) {
    event.preventDefault();
    const content = this.state.contentOfNewTask;
    const task = {
      id: Date.now().toString(),
      content
    };
    this.setState(previousState => ({
      tasks: [...previousState.tasks, task],
      contentOfNewTask: ''
    }));
  }

  get filteredTasks() {
    // console.log('Getter was computed');
    const filteredTasks = this.state.tasks.filter(task => {
      return task.content.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return filteredTasks;
  }

  render() {
    // const filteredTasks = this.state.tasks.filter(task => {
    //   return task.content.toLowerCase().includes(this.state.query.toLowerCase());
    // });

    // console.log(this.filteredTasks);

    return (
      <div className="App">
        <form onSubmit={this.addTask}>
          <input
            type="text"
            name="contentOfNewTask"
            value={this.state.contentOfNewTask}
            onChange={this.handleInputChange}
            placeholder="Insert task here..."
          />
          <button>+</button>
        </form>
        <form>
          <input
            type="search"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder="Search for anything..."
          />
        </form>
        {/* <ul>
          {this.state.tasks.map(task => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ul> */}
        <TaskList tasks={this.filteredTasks} />
      </div>
    );
  }
}

export default App;
