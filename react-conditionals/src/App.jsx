import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    };
    this.toggleParagraph = this.toggleParagraph.bind(this);
  }

  toggleParagraph() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }

  render() {
    // const isLoggedIn = false;
    // const age = 26;

    return (
      <div className="App">
        <button onClick={this.toggleParagraph}>Toggle Paragraph</button>

        {/* <p className={this.state.active ? 'paragraph-hidden' : ''}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?
        </p> */}

        {/* <p style={{ display: this.state.active ? 'block' : 'none' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?
        </p> */}

        {this.state.active && (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?</p>
        )}

        {/* {(isLoggedIn && <span>Welcome logged in user!</span>) || (
          <strong>User is not logged in.</strong>
        )}

        {(10 > 15 && 'First value is larger') || 'Second value is larger'}

        {(age < 20 && (
          <div>
            <span>I'm very young</span>
          </div>
        )) ||
          (age < 90 && (
            <div>
              <span>I'm at an okay age</span>
            </div>
          )) || (
            <div>
              <span>I'm very old</span>
            </div>
          )} */}
      </div>
    );
  }
}

export default App;
