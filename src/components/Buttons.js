import React, {Component} from 'react'

class Buttons extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <button onClick={this.props.moreClick}>More Info</button>
                <button>Hide</button>
            </div>
        )
    }
}

export default Buttons