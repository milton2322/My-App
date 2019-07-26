import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import './styles.css';

const WeatherData = ({data}) => {
  const {tempeture, weatherState, humidity, wind} = data;
  console.log(tempeture);
  //debugger;
  
  return (
    <div className= 'weatherDataCont'>
      <WeatherTemperature tempeture ={tempeture} weatherState = {weatherState} />
      <WeatherExtraInfo humidity ={humidity} wind = {wind}/>
    </div>);
}
// En un principio se tenia tempeture como un number.isRequired pero como me arrojaba error de type
// lo cambie a string ya que por consola se verifico y era un string.
WeatherData.propTypes = {
  data: PropTypes.shape({
    tempeture: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  })
  
}


export default WeatherData;