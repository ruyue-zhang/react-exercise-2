import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import PhoneList from './components/phoneList';

class App extends Component {
  state = {
    iphone: [],
    huawei: [],
    count: 0,
  };

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const products = await fetch('http://localhost:3000/products');
      const phone = await products.json();
      const iphoneList = phone.filter((item) => 
       item.category === "iPhone"
      )
      const huaweiList = phone.filter((item) => 
        item.category === "HUAWEI"
      )

      this.setState( { 
        iphone: iphoneList,
        huawei: huaweiList,
      })
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <main className="app">
        <Header count={this.state.count} />
        <div>
          <PhoneList
            key={1}
            brand={'iPhone'}
            goods={this.state.iphone}
            onAddGoods={this.handleAdd}
          />
          <PhoneList
            key={2}
            brand={'HUAWEI'}
            goods={this.state.huawei}
            onAddGoods={this.handleAdd}
          />
        </div>
      </main>
    );
  }
}

export default App;
