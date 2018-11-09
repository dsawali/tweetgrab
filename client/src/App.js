import React, { Component } from 'react';
import SearchCtrl from './SearchCtrl';
import TweetCtrl from './TweetCtrl';

class App extends Component {
  render() {
    return (
      <div className="body-wrapper">
        <SearchCtrl></SearchCtrl>
        <TweetCtrl></TweetCtrl>
      </div>
    );
  }
}

export default App;
