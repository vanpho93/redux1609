import React, { Component } from 'react';
import List from './components/List';
import WordForm from './components/WordForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WordForm />
        <List />
      </div>
    );
  }
}

export default App;
