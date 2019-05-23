import React, { Component } from 'react';

class PigCard extends Component {


  render() {
    return (
      <div className="ui eight wide column">
        <img alt={this.props.pig.name} src={this.props.img}></img>
        <h5>{this.props.pig.name}</h5>
        <p>Speaciality: {this.props.pig.specialty}</p>
        <p>Weight: {this.props.pig.weight} lbs</p>
        <button onClick={() => this.props.handleMoreInfo(this.props.pig)}>More Info</button>
        <button >Hide Me</button>
      </div>
    )
  }
}

export default PigCard
