import React,{Component}  from 'react';

class BitterTitle extends Component {
render() {
  let styles = {};

    if (this.props.type === 'bolder') {
      styles = {
        fontFamily: 'Bitter',
        color: '#000',
        weight: 900,
        fontSize: 38,
      }
    } else if (this.props.type === 'bold') {
      styles = {
        fontFamily: 'Bitter',
        color: '#000',
        weight: 700,
        fontSize: 28,
      }
    } else if (this.props.type === 'bold-yellow') {
      styles = {
        fontFamily: 'Bitter',
        color: '#ffe521',
        weight: 700,
        fontSize: 22,
      }
    } else if (this.props.type === 'bold-magenta') {
      styles = {
        fontFamily: 'Bitter',
        color: '#ff009e',
        weight: 700,
        fontSize: 22,
      }
    } else if (this.props.type === 'bold-mint') {
      styles = {
        fontFamily: 'Bitter',
        color: '#56f89a',
        weight: 700,
        fontSize: 22,
      }
    }

    return (
      <p style={styles}>
        {this.props.children}
      </p>
    );
  }
}

export default BitterTitle