import React, { Component } from 'react';
class Pig extends React.Component {
	constructor(props){
		super(props)

	}
	getPics = () => {
		let pictures = {
			Mudblood: "../hog-imgs/mudblood.jpg",
			Porkchop:"../hog-imgs/porkchop.jpg",
			Cherub:"../hog-imgs/cherub.jpg",
			"Piggy smalls": "../hog-imgs/piggy_smalls.jpg",
			Trouble: "../hog-imgs/trouble.jpg",
			Sobriety:"../hog-imgs/sobriety.jpg",
			Rainbowdash:"../hog-imgs/rainbowdash.jpg",
			TruffleShuffle:"../hog-imgs/truffleshuffle.jpg",
			"Bay of Pigs": "../hog-imgs/bay_of_pigs.jpg",
			"The Prosciutto Concern":"../hog-imgs/the_prosciutto_concern.jpg",
			"Galaxy Note":"../hog-imgs/galaxy_note.jpg",
			"Leggo My Eggo":"../hog-imgs/leggo_my_eggo.jpg",
			"Augustus Gloop":"../hog-imgs/augustus_gloop.jpg"
		}
		return pictures[this.props.hog.name]

	}

	moreInfo = () => {
		let div = document.getElementById(this.props.hog.name)

		let weight=document.createElement('p')
			weight.textContent = this.props.hog.weight
			div.appendChild(weight)
		let specialty=document.createElement('p')
			specialty.textContent = this.props.hog.specialty
			div.appendChild(specialty)
		let award=document.createElement('p')
			award.textContent = this.props.hog['highest medal achieved']
			div.appendChild(award)
	}

	render(){

		return (
			<div className="pigTile">
				<img alt={this.props.hog.name} src={this.getPics()} />
				<p>{this.props.hog.name}</p>
				<div id={this.props.hog.name}> </div>
				<button onClick={this.moreInfo}>More Info</button>
				<button onClick={() => this.props.onHide(this.props.hog.name)}>Hide Me</button>
			</div>

		)
	}
}
export default Pig
