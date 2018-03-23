import React,{Component}  from 'react';
import './styles.css'

class Isotype extends Component {
render() {

    if (this.props.type === 'black') {
      return <img style={{width: 200}} src={window.location.origin + '/details/Iso-black.png'} />
    } else if (this.props.type === 'white') {
      return <img src={window.location.origin + '/details/Iso-white.png'} />
    } else if (this.props.type === 'black-yellow') {
      return <img src={window.location.origin + '/details/Iso-black-y.png'} />
    } else if (this.props.type === 'white-yellow') {
      return <img src={window.location.origin + '/details/Iso-white-y.png'} />
    }
  }
}

export default Isotype