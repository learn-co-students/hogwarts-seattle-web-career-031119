import React, {Component} from 'react'

class CardBack extends Component {
    constructor() {
    super()
    }

    render() {
        return(
            // <div>
                <ul>
                    <li>
                        <h3>{this.props.hog.name}</h3>
                    </li>
                    <li><h3 className="achievementText">
                        {this.props.hog['highest medal achieved']}
                    </h3></li>
                    <li><h3>{this.props.hog.greased ? 
                         'GREASED' :
                         'ungreased'
                    }</h3></li>
                    <li><h3>
                        WEIGHT: {this.props.hog.weight} tons
                    </h3></li>
                </ul>
            // </div>
        )
    }
}

export default CardBack