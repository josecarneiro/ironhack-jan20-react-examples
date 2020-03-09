import React, { Component } from 'react';
import * as taskService from './services/task';

import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTaskRemoval = this.handleTaskRemoval.bind(this);
    this.handleTaskAddition = this.handleTaskAddition.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.listTasks();
  }

  listTasks() {
    taskService
      .list()
      .then(tasks => {
        this.setState({
          tasks
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTaskAddition(task) {
    taskService
      .create(task)
      .then(data => {
        this.setState(previousState => ({
          tasks: [data, ...previousState.tasks]
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTaskRemoval(id) {
    taskService
      .remove(id)
      .then(() => {
        const remainingTasks = this.state.tasks.filter(task => task._id !== id);
        this.setState({
          tasks: remainingTasks
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  get filteredTasks() {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.content.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return filteredTasks;
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="search"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder="Search for anything..."
            autoComplete="off"
          />
        </form>
        <TaskInput addTask={this.handleTaskAddition} />
        {/* <ul>
          {this.state.tasks.map(task => (
            <li key={task.id}>{task.content}</li>
          ))}
        </ul> */}
        <TaskList tasks={this.filteredTasks} removeTask={this.handleTaskRemoval} />
      </div>
    );
  }
}

export default App;
