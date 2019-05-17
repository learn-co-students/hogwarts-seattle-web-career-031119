import React, {Component} from 'react'

class CardBack extends Component {
    constructor() {
    super()
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.hog['highest medal achieved']}
                    <h3>{this.props.hog.greased ? 
                         'GREASED' :
                         'ungreased'
                    }</h3>
                </ul>
            </div>
        )
    }
}

export default CardBack