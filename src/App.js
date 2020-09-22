import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Iphone from './components/iphone';
import Huawei from './components/huawei';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Iphone />
        <Huawei />
      </main>
    );
  }
}

export default App;
