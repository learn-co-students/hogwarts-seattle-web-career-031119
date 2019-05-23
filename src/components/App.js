import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigsContainer from './PigsContainer'

class App extends Component {
  state = {
    sort: "volvo",
    filter: "peugeot"
  }

  handleSelect = (ev) => {
    this.setState({
      sort: ev.target.value
    })
  }

  handleFilter = (ev) => {
    this.setState({
      filter: ev.target.value
    })
  }

  render() {
    return (
      <div className="App">
          < Nav handleFilter={this.handleFilter} handleSelect={this.handleSelect}/>
          <PigsContainer sort={this.state.sort} hogs={hogs} filter={this.state.filter}/>
      </div>
    )
  }
}

export default App;
