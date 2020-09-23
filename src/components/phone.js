import React, { Component } from 'react';
import '../styles/phone.scss';
import photo from '../assets/product_image_placeholder.png';

class Phone extends Component {
  render() {
    const { name, price, onAdd } = this.props;
    return (
      <div className="phone">
        <span className="name">{name}</span>
        <img src={photo} alt="phone_img"/>
        <div className="buy">
          <span className="price">￥{price}</span>
          <button onClick={onAdd}>add to car</button>
        </div>
      </div>
    );
  }
}

export default Phone;