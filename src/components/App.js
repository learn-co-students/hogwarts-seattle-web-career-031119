import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogBox from './HogBox'
import hogs from '../porkers_data';

class App extends Component {

  render() {
    return (
      <div className="App">
          < Nav />
          <HogBox hogs={hogs}/>

      </div>
    )
  }
}

export default App;
