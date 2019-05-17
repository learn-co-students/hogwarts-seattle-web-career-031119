import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="Hello..._my_name_is_computer_who_are_you??">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
			<select onChange={props.handleSelect}>
			  <option default value="volvo">Sorty by</option>
			  <option value="weight">weight</option>
			  <option value="name">name</option>
			</select>{" "}
			<select onChange={props.handleFilter}>
			  <option default value="peugeot">Filter by</option>
			  <option value="grease">grease</option>
				</select>
			</div>
		</div>
	)
}

export default Nav
