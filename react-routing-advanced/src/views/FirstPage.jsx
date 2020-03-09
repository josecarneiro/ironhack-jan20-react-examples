import React from 'react';

const FirstPage = props => {
  console.log(props);
  return (
    <div>
      <p>This is the first page</p>
      <code>In path: {props.match.path}</code>
    </div>
  );
};

export default FirstPage;
