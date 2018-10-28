import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary';
import MainApp from './MainApp';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MainApp/>
      </ErrorBoundary>
    );
  };
}
