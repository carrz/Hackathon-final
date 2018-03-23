import React, {Component}  from 'react';
import './styles.css'
import Logo from '../Logos/Logo';

class Nav extends Component {
render() {
  return (
    <div className="nav">
      <Logo className="big-logo" />
    </div>
    )
  }
}

export default Nav