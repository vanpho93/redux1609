import React, { Component } from 'react';
import Word from './components/Word';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Word en="Hello" vn="Xin chao" isMemorized />
      </div>
    );
  }
}

export default App;

/*

<Box>

</Box>

*/