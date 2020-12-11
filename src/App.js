import React, { Component } from 'react';
import {CardList} from './Component/Card-list/Card-list';
import './App.css';
import { SearchBox } from './Component/SearchBox/Serach-Box';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;
