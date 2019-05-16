import React, { Component } from 'react';
import HogTile from './HogTile';
import HogFilter from './HogFilter';

export default class HogBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      filter: {
        hogName: '',
        hogWeight: 0,
        onlyGreased: false
      }
    }

    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter(filterState){
    this.setState({
      filter: {
        hogName: filterState.hogName,
        hogWeight: parseFloat(filterState.hogWeight) | 0,
        onlyGreased: filterState.onlyGreased
      }

    })
  }

  renderHogTiles(){
    return this.props.hogs.map(hog => {
      if(!hog.name.includes(this.state.filter.hogName) ||
        !(hog.weight > this.state.filter.hogWeight) ||
        (this.state.filter.onlyGreased && !hog.greased)){
          return null
        }
      return <HogTile hog={hog}/>
    })
  }

  render(){
    return <div>
      <HogFilter updateFilter={this.updateFilter}/>
      <div className="ui grid container cards">{this.renderHogTiles()}</div>
    </div>
  }
}
