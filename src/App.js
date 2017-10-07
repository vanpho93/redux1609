import React, { Component } from 'react';
import Word from './components/Word';
import WordForm from './components/WordForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Word en="Hello" vn="Xin chao" isMemorized />
        <WordForm />
      </div>
    );
  }
}

export default App;
