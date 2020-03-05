import React, { Component } from 'react';

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
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleTaskAddition(task) {
    this.setState(previousState => ({
      tasks: [...previousState.tasks, task]
    }));
  }

  get filteredTasks() {
    // console.log('Getter was computed');
    const filteredTasks = this.state.tasks.filter(task => {
      return task.content.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return filteredTasks;
  }

  handleTaskRemoval(id) {
    const remainingTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: remainingTasks
    });
  }

  render() {
    // const filteredTasks = this.state.tasks.filter(task => {
    //   return task.content.toLowerCase().includes(this.state.query.toLowerCase());
    // });

    // console.log(this.filteredTasks);

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
