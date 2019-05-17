import React, {Component} from 'react'
import Hog from './Hog'

class Hogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hogs: props.hogs
        }
    }

    render() {
        let hogs = this.state.hogs.filter( hog => hog.visible === true )
        
        return(
            <div>
                {hogs.map( hog => {
                    return <Hog hog={hog} key={hog.name}/>
                })}
            </div>
        )
    }
}

export default Hogs