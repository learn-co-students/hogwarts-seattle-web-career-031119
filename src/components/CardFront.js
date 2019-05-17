import React, {Component} from 'react'

class CardFront extends Component {
    constructor(props) {
        super(props)
    }

    image = () => {
        let image_name = this.props.hog.name.toLowerCase().split(" ")
        image_name = image_name.join("_")
        let pic = require(`../hog-imgs/${image_name}.jpg`)
        return pic
    }
    
    render() {
        
        return(
            <div>
                <div>
                    <img alt={this.props.hog.name} src={this.image()}/>
                </div>
                <h3>{this.props.hog.name}</h3>
                {this.props.hog.specialty}
            </div>
        )
    }
}

export default CardFront