import React, { Component } from 'react';
import '../styles/phoneList.scss';
import Phone from './phone';

class PhoneList extends Component {
  render() {
    const { brand, goods, onAddGoods } = this.props;
    return (
      <div className="brand">
        <span className="brand_name">{brand}</span>
        <div className="phone_list">
          {goods.map((item) => (
            <Phone
              name={item.name}
              price={item.price}
              onAdd={onAddGoods}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PhoneList;