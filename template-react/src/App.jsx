import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Rezanje Slona
        </header>
        <div className="App-body">
          <h1>Input</h1>
          <code title="or anywhere else, it's your app, don't let me tell you what to do"> your blocks here </code>
          <hr />
          <h1>Output</h1>
          <code title="or anywhere else, it's your app, don't let me tell you what to do"> your blocks here </code>
        </div>
      </div>
    );
  }
}

export default App;
