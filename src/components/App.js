import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from './Hogs'
import hogs from '../porkers_data';
import SortBar from './SortBar';

class App extends Component {
  constructor() {
    super()
    this.state={
      sort: "none"
    }
  }

  selectSort = (ev) => {
    console.log(ev.target.value)
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <SortBar action={this.selectSort}/>
          <Hogs hogs={hogs} sortMethod={this.state.sort} />
      </div>
    )
  }
}

export default App;
