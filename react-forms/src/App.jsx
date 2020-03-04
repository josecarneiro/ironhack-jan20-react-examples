import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'José',
      email: '',
      message: ''
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.changeName = this.changeName.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  sendMessage(event) {
    // ...
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    alert(`Message with data: ${JSON.stringify(data, null, 2)} was sent.`);
  }

  changeName(event) {
    const value = event.target.value;
    this.setState({
      name: value
    });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.sendMessage}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeName}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <span>Message being sent by {this.state.name}</span>
          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default App;
