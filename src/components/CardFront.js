import React, {Component} from 'react'
import augustus from '../hog-imgs/hog_imgs'

class CardFront extends Component {
    constructor(props) {
        super(props)
        console.log(props)
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
                <img alt={this.props.hog.name} src={this.image()}/>
                <br />
                <h3>{this.props.hog.name}</h3>
                <br />
                {this.props.hog.specialty}
                <br />
            </div>
        )
    }
}

export default CardFront