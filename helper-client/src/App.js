import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Route path="/" />
      </React.Fragment>
    );
  }
}

export default App;
