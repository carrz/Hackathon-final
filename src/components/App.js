import React, { Component } from 'react';
import BitterTitle from './components/Typo/BitterTitle';
import OpenSans from './components/Typo/OpenSans';
import Card from './components/Cards/Cards';
import Loader from './components/Loader/Loader'
import Isotype from './components/Isotypes/Isotypes';
import Logo from './components/Logos/Logo';
import Bracket from './components/Icons/Icons'
import {ButtonYellow, ButtonGreen, ButtonRose, ButtonYellowM} from './components/Buttons/Buttons';
import logo from './logo.svg';
import './App.css';


Card.defaultProps = {
  title: 'Titulo de la tarjeta',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus natus necessitatibus dolorem at rerum soluta placeat nostrum!',
  link: 'Leer más',
  href: '#'
};
ButtonYellow.defaultProps =  { 
  name: 'texto del boton'
};
ButtonYellowM.defaultProps =  { 
  name: 'texto del boton'
};
ButtonRose.defaultProps =  { 
  name: 'texto del boton'
};
ButtonGreen.defaultProps =  { 
  name: 'texto del boton'
};

class App extends Component {
  render() {
    return (
      <div>
        <BitterTitle type='bolder'>Laboratoria</BitterTitle>
        <BitterTitle type='bold'>Holo</BitterTitle>
        <BitterTitle type='bold-yellow'>Holo</BitterTitle>
        <BitterTitle type='bold-magenta'>Holo</BitterTitle>
        <BitterTitle type='bold-mint'>Holo</BitterTitle>
        <OpenSans type='bold'>Holo</OpenSans>
        <OpenSans type='regular'>Holo</OpenSans>
        <Loader />
        <Card />
        <Isotype type='black' />
        <Isotype type='black-yellow' />
        <Isotype type='white' />
        <Isotype type='white-yellow' />
        <Logo />
        <Logo type="talent" />
        <Logo type="black" />
        <Logo type="black-yellow" />
        <Logo type="white" />
        <Logo type="white-yellow" />
        <Bracket type='b_yellow_one' />
        <Bracket type='b_yellow_two' />
        <Bracket type='b_yellow_three' />
        <Bracket type='b_pink_one' />
        <Bracket type='b_pink_two' />
        <Bracket type='b_pink_three' />
        <Bracket type='b_green_one' />
        <Bracket type='b_green_two' />
        <Bracket type='b_green_three' />
        <ButtonYellowM />
        <ButtonGreen />
        <ButtonRose />
        <ButtonYellow/>
      </div>
    );
  }
}

export default App;
