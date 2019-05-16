import React, { Component } from 'react'

export default class HogFilter extends Component {

  constructor(props){
    super(props)
    this.state = {
      hogName: '',
      hogWeight: '',
      onlyGreased: false
    }

    this.changeSearchParameter = this.changeSearchParameter.bind(this)
  }


  changeSearchParameter(ev){
    this.setState({
      [ev.target.id]: ev.target.id === 'onlyGreased' ? ev.target.checked : ev.target.value
    }, ()=>this.props.updateFilter(this.state))
  }

  render(){
    return (
      <div className="ui form">
        <div className="three fields">
          <div className="field">
            <label>Hog Name</label>
            <input type="text" onChange={this.changeSearchParameter} value={this.state.hogName} placeholder="hog name" id="hogName"/>
          </div>
          <div className="field">
            <label>Minimum Hog Weight</label>
            <input type="number" onChange={this.changeSearchParameter} value={this.state.hogWeight} placeholder='0' id="hogWeight"/>
          </div>
          <div className="field">
            <div className="middle aligned content centered-field-item">
              <div className="ui toggle checkbox">
                <input type="checkbox" onChange={this.changeSearchParameter} checked={this.state.onlyGreased} id="onlyGreased"/>
                <label>Greased?</label>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
