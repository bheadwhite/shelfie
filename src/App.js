import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: [
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95Q8aQU4ibNa4C3U349Wj0dwzFmPPxLue3YA_lWhthdQH_8wR',
          name: 'Simpsons Poster',
          price: 2
      }, {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU56DVu4poPHFbNYcm7y-a7CsglYO-L1eIUpkRxj78wq4H9wFWJg',
        name: 'tree',
        price: 44
      }, {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGYe3rel7j0q9krzaAgqYFtiufV7e-cTiqBTd4XL2zJGjg0UF6g',
        name: 'knives',
        price: 292
      }],
    }
  }

  render() {
    return (
      <div className="App">
        <Header /> 
        <Form />
        <Dashboard 
          inventory={this.state.inventory}
        />

      </div>
    );
  }
}

export default App;
