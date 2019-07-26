import React, { Component } from 'react';
//import {Grid } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
//import Col from 'react-bootstrap/Col';
//import LocationList from './components/LocationList';
import './App.css';

/*const cities = [
  'Cali,co',
  'Bogota,co',
  'Buenos Aires,ar',
  'Ciudad de México,mx'
];*/

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);     
  }
  render() {
    return (
      <Container>
        <Row >
          <Col>prueba </Col>   
          <Col>prueba2 </Col> 
        </Row> 

        <Row >
          <div>
            <Col sm={8} >sm 8</Col>   
            <Col>prueba4 </Col> 
            <Col>prueba5 </Col>
          </div>
          
        </Row>    

      </Container>
      
        /*<div className="App">
            <LocationList cities = { cities }
            onSelectedLocation = {this.handleSelectedLocation}>
            </LocationList>
        </div>*/
    );
  }
}

export default App;
