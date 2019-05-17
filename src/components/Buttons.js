import React, {Component} from 'react'

class Buttons extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="footer">
                <button onClick={this.props.moreClick}>Flip Card</button>
                <button onClick={_ => this.props.hideClick(this.props.name)}>Hide</button>
            </div>
        )
    }
}

export default Buttons