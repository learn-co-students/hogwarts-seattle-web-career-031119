import React, { Component } from 'react';

class PigInfo extends Component {

  isGreased = () => {
    if (this.props.currentPig.greased) {
      return <p> The pig is currently greased </p>
    } else {
      return <p> The pig is not currently greased </p>
    }
  }

  handleClose = () => {
    this.props.removePigInfo()
  }

  render() {
    console.log('here')
    return (
      <div className="infoTile">
        <small onClick={ this.handleClose } className="xButton">X</small>
        <small>More Info for:</small><h4>{this.props.currentPig.name}</h4>
        <p>Highest Medal Achieved: {this.props.currentPig['highest medal achieved']}</p>
        {this.isGreased()}
      </div>
    )
  }
}

export default PigInfo
