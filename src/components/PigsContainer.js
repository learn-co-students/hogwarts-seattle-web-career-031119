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

  sortPigs = () => {
    let newOrder = [...this.state.hogs]
    if (this.props.sort === 'weight') {
       newOrder.sort(function(a, b) {
        return a.weight - b.weight
      })
    } else if (this.props.sort === 'name') {
      newOrder.sort(this.nameSort)
    }
    return newOrder
  }

  filterPigs = (newOrder) => {
    if (this.props.filter === 'grease') {
      newOrder = newOrder.filter( (pig) => {
        return pig.greased
      })
    }
    return newOrder
  }

  generatePigs = () => {
    let newHogs = this.sortPigs()
    newHogs = this.filterPigs(newHogs)

    return newHogs.map ((pig,idx) => {
      return (
        <PigCard
          key={idx}
          img={IMGS[pig.name]}
          pig={pig}
          handleMoreInfo={this.handleMoreInfo}
          hidePigCard={this.hidePigCard}
        />
      )
    })
  }

  hidePigCard = (pig) => {
    if (this.state.hogs.includes(pig)) {
      let newHogs = [...this.state.hogs]
      for (let i=0; i < newHogs.length; i++) {
        if (newHogs[i] === pig) {
          newHogs.splice(i, 1)
        }
      }
      this.setState({
        hogs: newHogs
      })
    }
  }

  showInfo = () => {
    if (this.state.currentPig) {
      return <PigInfo
        currentPig={this.state.currentPig}
        removePigInfo={this.removePigInfo}
      />
    }
  }

  removePigInfo = () => {
    this.setState({
      currentPig: null
    })
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

const divStyle = {
  backgroundColor: 'green',
}

export default PigsContainer
