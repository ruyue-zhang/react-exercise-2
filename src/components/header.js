import React, { Component } from 'react';
import '../styles/header.scss';

class Header extends Component {
  state = {
    title: 'Store',
  };

  render() {
    return (
      <div className="header">
        <span className="title">{this.state.title}</span>
        <span className="car">{this.props.count}</span>
      </div>
    );
  }
}

export default Header;
