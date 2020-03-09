import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = props => {
  console.log(props);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/second/jose">José's Profile</Link>
      <Link to="/second/santi">Santi's Profile</Link>
      <code>In path: {props.location.pathname}</code>
    </nav>
  );
};

export default withRouter(NavBar);
