import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Pig from './Pig'

class App extends Component {
  constructor(){
    super()
      this.state = {
        hogs: hogs,
        currentHogs: hogs,
      }
  }


  onHide = (name) => {
    let newHogs = []
    this.state.currentHogs.forEach(hog => {
      if (hog.name != name){
        newHogs.push(hog)
      }
    })
    this.setState({
      currentHogs: newHogs
    })
  }
  handleOption = (ev) => {

    if(ev.target.value === "Weight"){
      let currentPigs = this.state.currentHogs
      let sortedHogs = currentPigs.sort((a, b)=> (a.weight> b.weight)? -1: 1)

      this.setState({
        currentHogs: sortedHogs
        })
    } else if(ev.target.value === "None"){
      let allHogs = hogs
      console.log('hitting None')
      this.setState({
        currentHogs: allHogs
      })
    }
  }
  render() {
    return (
      <div className="App">
          < Nav handleOption={this.handleOption} />
          < HogContainer hogs={this.state.currentHogs} onHide={this.onHide} />
      </div>
    )
  }
}

export default App;
