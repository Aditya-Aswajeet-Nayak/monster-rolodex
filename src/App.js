import { Component } from 'react';
// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => 
    response.json()).then((users) => this.setState(
    () =>{
      return{monsters: users}
    },
    ()=>{
      console.log(this.state)
    }
    ));
  }
  onSearchChange = (event) =>{ 
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  };

  render(){
    const {/*monsters */searchField}=this.state;
    const {onSearchChange}=this;

    const filterMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
        className='monsters-search-box'
        
        onChangehandler={onSearchChange}
        placeholder='search monsters'
        />
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }

}

export default App;
