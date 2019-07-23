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
      },
      hiddenHogs: []
    }

    this.hideHog = this.hideHog.bind(this)
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

  hideHog(hog){
    this.setState({
      hiddenHogs: [...this.state.hiddenHogs, hog]
    })
  }

  renderHogTiles(){
    return this.props.hogs.map(hog => {
      if(!hog.name.toLowerCase().includes(this.state.filter.hogName.toLowerCase()) ||
        !(hog.weight > this.state.filter.hogWeight) ||
        (this.state.filter.onlyGreased && !hog.greased) ||
        this.state.hiddenHogs.includes(hog)){
          return null
        }
      return <HogTile key={hog.name} hideHog={this.hideHog} hog={hog}/>
    })
  }

  render(){
    return <div>
      <HogFilter updateFilter={this.updateFilter}/>
      <div className="ui grid container cards">{this.renderHogTiles()}</div>
    </div>
  }
}
