import React, { Component } from 'react';
import '../styles/phoneList.scss';
import Phone from './phone';

class Huawei extends Component {
  state = {
    phoneList: [
      { id: 1, name: 'HUAWEI P40 Prp+', price: 7999 },
      { id: 2, name: 'HUAWEI Mate 30', price: 5000 },
      { id: 3, name: 'HUAWEI nova 7', price: 4000 },
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

export default Huawei;