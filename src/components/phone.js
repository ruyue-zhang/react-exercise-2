import React, { Component } from 'react';
import '../styles/phone.scss';
import photo from '../assets/product_image_placeholder.png';

class Phone extends Component {
  state = {
    name: 'iphone11',
    price: 5999,
  };

  render() {
    return (
      <div className="phone">
        <span className="name">{this.state.name}</span>
        <img src={photo} alt="phone_img"/>
        <div className="buy">
          <span className="price">￥{this.state.price}</span>
          <button>add to car</button>
        </div>
      </div>
    );
  }
}

export default Phone;