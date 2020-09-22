import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Phone from './components/phone';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Phone />
      </main>
    );
  }
}

export default App;
