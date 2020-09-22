import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import PhoneList from './components/phoneList';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <PhoneList />
      </main>
    );
  }
}

export default App;
