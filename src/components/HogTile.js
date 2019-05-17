import React, {Component} from 'react'

export default class HogTile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      infoVisible: false
    }

    // this.showIcon = React.createRef();
    this.toggleRevealed = this.toggleRevealed.bind(this)
  }

  toggleRevealed(){
    this.setState({
      infoVisible: !this.state.infoVisible
    })
  }

  conditionallyRenderHogInfo(){
    if (!this.state.infoVisible){
      return null;
    }
    return (
      <div>
        <div>
          <strong>Weight:</strong> {this.props.hog.weight}
        </div>
        <div>
          <strong>Highest Medal Achieved:</strong> {this.props.hog['highest medal achieved']}
        </div>
        <div>
          <strong>greased:</strong> {this.props.hog.greased? <i className="check icon"></i> : <i className="x icon"></i>}
        </div>



      </div>
    )
  }

  imageFromName(name) {
    return "/hog-imgs/" + name.toLowerCase().replace(/\s/g, "_") + ".jpg"
  }

  render() {
    return (<div className="seven wide column ui fluid card">
      <div className="image">
        <img src={this.imageFromName(this.props.hog.name)} alt={this.props.hog.name}/>
      </div>

        <div className="content">
          <h3 className="content">{this.props.hog.name}</h3>
          <div>
            <strong>Speciality:</strong> {this.props.hog.specialty}
          </div>
        </div>

        <div className="ui bottom attached buttons">
          <div onClick={this.toggleRevealed} className="ui button">
            <i className="add icon"></i>
            See Info
          </div>
          <div onClick={() => this.props.hideHog(this.props.hog)} className="ui button">
            <i className="eye slash outline icon"></i>
            Hide Pig
          </div>

        </div>
        <div className="extra data">
          {this.conditionallyRenderHogInfo()}
        </div>
      </div>
      )
  }
}
