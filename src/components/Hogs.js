import React, {Component} from 'react'
import Hog from './Hog'
import sortBy from 'array-sort-by'

class Hogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hogs: props.hogs,
            sort: props.sortMethod
        }
    }

    hide = (name) => {
        let hogs = this.state.hogs
        let hog = hogs.find( hog => hog.name === name )
        hog.visible = false
        this.setState(hogs)
    }

    hogSort = (hogs) => {
        console.log('sorting by ' + this.props.sortMethod)
        switch (this.props.sortMethod) {
            case 'alpha':
                return hogs.sort( (a, b) => a.name < b.name ? -1 : +(a.name > b.name) )
            case 'weight':
                return hogs.sort( (a, b) => a.weight < b.weight ? -1 : +(a.weight > b.weight) )
            case 'grease':
                hogs = hogs.sort( (a, b) => b.greased - a.greased )
                return hogs
            default:
                return hogs
        }
    }

    render() {
        let hogs = this.state.hogs.filter( hog => hog.visible === true )
        hogs = this.hogSort(hogs)
        
        
        return(
            <div>
                {hogs.map( hog => {
                    return <Hog hog={hog} key={hog.name} hideClick={this.hide}/>
                })}
            </div>
        )
    }
}

export default Hogs