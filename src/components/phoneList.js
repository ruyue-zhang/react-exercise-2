import React, { Component } from 'react';
import '../styles/phoneList.scss';
import Phone from './phone';

class PhoneList extends Component {
  state = {
    phoneList: [
      { id: 1, name: 'iPhone11', price: 5999 },
      { id: 2, name: 'iPhoneXS', price: 5399 },
      { id: 3, name: 'iPhoneSE', price: 3599 },
    ],
  };

  render() {
    return (
      <div className="phone_list">
        {this.state.phoneList.map((item) => (
          <Phone key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    );
  }
}

export default PhoneList;