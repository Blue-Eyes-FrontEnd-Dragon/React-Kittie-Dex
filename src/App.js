import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ kittens: users }));
  }

  render () {
    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='Search Kitties...' 
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.kittens} />
      </div>
    );
  }
}

export default App;
