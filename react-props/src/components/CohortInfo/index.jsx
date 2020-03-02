// import React from 'react';
// import { Component } from 'react';
import React, { Component } from 'react';

// const Component = React.Component;
// const { Component } = React;

class CohortInfo extends Component {
  render() {
    // console.log(this.props);
    const { date, children } = this.props;
    return (
      <div>
        <strong>{date.toDateString()}</strong>
        <h3>Students</h3>
        {children}
      </div>
    );
  }
}

export default CohortInfo;
