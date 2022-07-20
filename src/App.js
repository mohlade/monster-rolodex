import { Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      this.setState(
      ()=>{
        return { monsters: users};
      },
      ()=>{
       
      }
      )
    );

  }
  
  onSearchChange =  (event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState(
      () =>{
        return { searchField };
      }
    );
  }
  
  render() {
    
    const {searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
        return (
    <div className="App">  
    <h1 className="app-title"> MONSTERS ROLODEX</h1> 
    <SearchBox  MONSTERS
    className="monsters-search-box"
    onChangeHandler={onSearchChange} 
    placeholder='search monsters'/>   

    <CardList monsters ={filteredMonsters} />
      </div>
  );
  }
}

export default App;
