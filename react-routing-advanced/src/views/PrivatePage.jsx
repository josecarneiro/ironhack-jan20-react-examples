import React from 'react';

const PrivatePage = props => {
  console.log(props);
  return (
    <div>
      <p>This page is private</p>
      <p>
        The authenticated user is named {props.user.name} and is {props.user.age} years old
      </p>
    </div>
  );
};

export default PrivatePage;
