import React, {Component} from 'react'

class SortBar extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div className="">
                <select onChange={this.props.action.selectSort}>
                    <option value="none">No sort</option>
                    <option value="alpha">Alphabetical</option>
                    <option value="weight">Weight</option>
                    <option value="grease">Greased?</option>
                </select>
            </div>
        )
    }
}

export default SortBar