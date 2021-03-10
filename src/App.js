import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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
    const { kittens, searchField } = this.state;
    const filteredKittens = kittens.filter(kitten => 
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className='App'>
        <SearchBox 
          type='search'
          placeholder='search kitties...'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList kittens={filteredKittens} />
      </div>
    );
  }
}

export default App;
