import React, { Component } from 'react';

// import { listAll } from './../services/breed';
import * as breedService from './../services/breed';

class BreedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: ['labrador', 'dalmatian']
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    breedService
      .listAll()
      .then(breeds => {
        this.setState({
          breeds
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.breeds.map(breed => (
          <div key={breed}>
            <strong>{breed}</strong>
          </div>
        ))}
      </div>
    );
  }
}

export default BreedList;
