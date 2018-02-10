import React, { Component } from 'react';

import TopNav from './components/TopNav';
import Routes from './routes/index';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Routes />
      </div>
    );
  }
}

export default App;
