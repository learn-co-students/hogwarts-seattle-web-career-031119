import React, { Component } from 'react';
import Pig from './Pig'

class HogContainer extends React.Component {
	constructor(props){
		super(props)
	}

	render(){

		return (
		<div
			className="ui grid container">
			{this.props.hogs.map((hog) => {

				return < Pig key={hog.name} hog={hog} onHide ={this.props.onHide}/>
				}
		 	)}
		</div>

		)
	}
}
export default HogContainer
