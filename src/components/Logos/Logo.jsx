import React,{Component}  from 'react';
import './styles.css'

class Logo extends Component {
render() {

    if (this.props.type === 'black') {
      return <img className="logo" src={window.location.origin + '/details/Logo-black.png'} />
    } else if (this.props.type === 'white') {
      return <img className="logo" src={window.location.origin + '/details/Logo-white.png'} />
    } else if (this.props.type === 'black-yellow') {
      return <img className="logo" src={window.location.origin + '/details/Logo-black-yellow.png'} />
    } else if (this.props.type === 'white-yellow') {
      return <img className="logo" src={window.location.origin + '/details/Logo-white-yellow.png'} />
    }else if (this.props.type === 'talent') {
      return <img className="talent" src={window.location.origin + '/details/Laboratoria-Logo-black.png'} />
    } else {
      return <img className="talent" src={window.location.origin + '/details/Laboratoria_Logo_RG-01.png'} />
    }
  }
}

export default Logo