import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import PhoneList from './components/phoneList';

class App extends Component {
  state = {
    brands: [
      { id: 1,
        phones: [
          { id: 1, name: 'iPhone11', price: 5999 },
          { id: 2, name: 'iPhoneXS', price: 5399 },
          { id: 3, name: 'iPhoneSE', price: 3599 },
        ], 
        brand_name: 'IPHONE', 
      },
      { id: 2,
        phones: [
          { id: 1, name: 'HUAWEI P40 Prp+', price: 7999 },
          { id: 2, name: 'HUAWEI Mate 30', price: 5000 },
          { id: 3, name: 'HUAWEI nova 7', price: 4000 },
        ], 
        brand_name: 'HUAWEI',
      },
    ],
  };
  render() {
    return (
      <main className="app">
        <Header />
        <div>
          {this.state.brands.map((brand) => (
            <PhoneList
              key={brand.id}
              brand={brand.phones}
              title={brand.brand_name}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
