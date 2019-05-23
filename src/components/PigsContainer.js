import React, { Component } from 'react'
import PigCard from './PigCard'
import PigInfo from './PigInfo'
import Augustus from '../hog-imgs/augustus_gloop.jpg'
import Bay from '../hog-imgs/bay_of_pigs.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import Galaxy from '../hog-imgs/galaxy_note.jpg'
import Leggo from '../hog-imgs/leggo_my_eggo.jpg'
import Mud from '../hog-imgs/mudblood.jpg'
import Piggy from '../hog-imgs/piggy_smalls.jpg'
import Porkchop from '../hog-imgs/porkchop.jpg'
import Rainbowdash from '../hog-imgs/rainbowdash.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import Prosciutto from '../hog-imgs/the_prosciutto_concern.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import Truffle from '../hog-imgs/truffleshuffle.jpg'

const IMGS = {
  'Mudblood': Mud,
  'Augustus Gloop': Augustus,
  'Porkchop': Porkchop,
  'Cherub': Cherub,
  'Piggy smalls': Piggy,
  'Trouble': Trouble,
  'Sobriety': Sobriety,
  'Rainbowdash': Rainbowdash,
  'TruffleShuffle': Truffle,
  'Bay of Pigs': Bay,
  'The Prosciutto Concern': Prosciutto,
  'Galaxy Note': Galaxy,
  'Leggo My Eggo': Leggo,
}

class PigsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPig: null,
      hogs: this.props.hogs
    }
  }

  handleMoreInfo = (pig) => {
    this.setState({
      currentPig: pig
    })
  }

  nameSort(pig1, pig2) {
    if ( pig1.name < pig2.name ){
      return -1;
    }
    if ( pig1.name > pig2.name ){
      return 1;
    }
      return 0;
  }

  generatePigs = () => {
    console.log(this.props.hogs)

    let newOrder = [...this.state.hogs]
    console.log({newOrder})


    if (this.props.sort === 'weight') {
       newOrder.sort(function(a, b) {
        return a.weight - b.weight
      })
    } else if (this.props.sort === 'name') {
      newOrder.sort(this.nameSort)
    }

    if (this.props.filter === 'grease') {
      newOrder = newOrder.filter( (pig) => {
        return pig.greased
      })
    }

    console.log('thisisakdjf;ajdoj', newOrder)
    return newOrder.map ((pig,idx) => {
      return <PigCard key={idx} img={IMGS[pig.name]} pig={pig} handleMoreInfo={this.handleMoreInfo}/>
    })
  }

  showInfo = () => {
    if (this.state.currentPig) {
      return <PigInfo currentPig={this.state.currentPig}/>
    }
  }

  render() {
    return (
      <div>
          {this.showInfo()}
        <div className="ui grid container">
          {this.generatePigs()}
        </div>
      </div>
    )
  }
}

export default PigsContainer
