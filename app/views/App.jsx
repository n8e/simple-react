import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props', this.props);
    return (
      <div>
        Success in app!!
      </div>
    );
  }
}

export default App;
