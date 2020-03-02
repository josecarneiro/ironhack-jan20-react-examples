import React from 'react';

// Class based components are an alternative to functional components
// There are some key differences:
// 1 - Class based components hold state
// 2 - Class based components can have custom methods
// 3 - Class based components have a lifecycle
// 4 - Functional components are, by definition, more performant

class AppAlternativeMessage extends React.Component {
  someMethod() {
    // ...
  }

  otherMethod() {
    // ...
  }

  render() {
    return (
      <div>
        <p>Olá mundo</p>
      </div>
    );
  }
}

// const AppAlternativeMessage = () => {
//   return (
//     <div>
//       <p>Olá mundo</p>
//     </div>
//   );
// };

export default AppAlternativeMessage;
