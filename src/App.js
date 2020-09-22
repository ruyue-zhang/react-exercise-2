import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
      </main>
    );
  }
}

export default App;
