import React,{Component}  from 'react';

class OpenSans extends Component {
render() {
  let styles = {};

    if (this.props.type === 'bold') {
      styles = {
        fontFamily: 'Open Sans',
        color: '#000',
        weight: 700,
        fontSize: 22,
      }
    } else if (this.props.type === 'regular') {
      styles = {
        fontFamily: 'Open Sans',
        color: '#000',
        weight: 400,
        fontSize: 20,
      }
    }

    return (
      <p style={styles}>
        {this.props.children}
      </p>
    );
  }
}

export default OpenSans