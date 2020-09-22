import React, { Component } from 'react';
import '../styles/phoneList.scss';
import Phone from './phone';

class PhoneList extends Component {
  render() {
    const { brand, title } = this.props;
    return (
      <div className="brand">
        <span className="brand_name">{title}</span>
        <div className="phone_list">
          {brand.map((item) => (
            <Phone
              key={item.id}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PhoneList;