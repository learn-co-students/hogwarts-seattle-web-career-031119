import React, {Component} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import Buttons from './Buttons'

class Hog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hog: props.hog
        }
    }

    flip = () => {
        let hog = this.state.hog
        hog.side === 'front' ?
            hog.side = 'back' :
            hog.side = 'front'
        this.setState({hog})
    }

    render() {
        return(
            <div className="pigTile">
                {this.props.hog.side === "front" ?
                <CardFront hog={this.props.hog}/> :
                <CardBack hog={this.props.hog}/>}
                <Buttons moreClick={this.flip}/>
            </div>
        )
    }
}

export default Hog
// 