import React, { Component } from 'react';
import BitterTitle from './components/Typo/BitterTitle';
import OpenSans from './components/Typo/OpenSans';
import Card from './components/Cards/Cards';
import Loader from './components/Loader/Loader'
import Isotype from './components/Isotypes/Isotypes';
import Logo from './components/Logos/Logo';
import Bracket from './components/Icons/Icons'
import { ButtonYellow, ButtonGreen, ButtonRose, ButtonYellowM } from './components/Buttons/Buttons';
import { Row, Col, Grid } from 'react-flexbox-grid';
import logo from './logo.svg';
import Nav from './components/Nav/Nav';
import './App.css';


// Card.defaultProps = {
//   title: 'Titulo de la tarjeta',
//   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus natus necessitatibus dolorem at rerum soluta placeat nostrum!',
//   link: 'Leer más',
//   href: '#'
// };
ButtonYellow.defaultProps =  { 
  name: 'ButtonYellowM'
};
ButtonYellowM.defaultProps =  { 
  name: 'ButtonYellowM'
};
ButtonRose.defaultProps =  { 
  name: 'ButtonRose'
};
ButtonGreen.defaultProps =  { 
  name: 'ButtonGreen'
};

class App extends Component {
  render() {
    return (
      <Row>
        <Nav/>
        <Col md={12}>
        <div className="center" >
        <BitterTitle type='bolder'>Guía de estilos de Laboratoria</BitterTitle>
        <Col md={8} mdOffset={2}>
          <OpenSans type='regular'>Laboratoria es más que un nombre. Es un Conjunto de valores, atributos y piezas visuales, que reflejan nuestro espíritu. Usarlo día a día, reforzará nuestra pasión y compromiso, donde mujeres talentosas tengan la oportunidad de desarrollar su carrera en tecnología.</OpenSans>
        </Col>
        </div>
        <BitterTitle type='bold-magenta'>Bienvenido a nuestra guía de estilos de Laboratoria, aquí encontrarás diversos estilos que podrás utilizar, para tu trabajo, adelante echa un vistazo y prueba</BitterTitle>
        <div className="botones">
          <h3 className="textH">Botones</h3>
          <p className="textH">Para un usar estos botones solo tienes que importar el componente con el botán que desees usar</p>
         <code>import ButtonYellow from './components/Buttons/Buttons';</code>
         <div className="text">
          <ButtonYellowM />
          </div>
          <div>
          <ButtonGreen />
          </div>
          <div>
          <ButtonRose />
          </div>
          <div>
          <ButtonYellow/>
          </div>
        </div>
        </Col>
        </Row>
    );
  }
}

export default App;
