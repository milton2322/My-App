import React from 'react';
//import { WiCloud,WiDaySnowWind,WiDayFog,WiDaySunny,WiDayRain } from 'weather-icons-react';
//import WeatherIcons from 'react-weatherIcons';
import ReactAnimatedWeather from 'react-animated-weather';
import {CLOUDY,CLEAR_DAY,CLEAR_NIGHT,PARTLY_CLOUDY_DAY,RAIN,SLEET,SNOW,WIND,FOG} from '../../../constants/Weathers';
import PropTypes from 'prop-types';
//constants/Weathers
const stateToContinue = weatherState => {
	switch (weatherState) {	
		case CLOUDY:
			return "CLOUDY";
		case CLEAR_DAY:
			return "CLEAR_DAY";
		case CLEAR_NIGHT:
			return "CLEAR_NIGHT"
		case PARTLY_CLOUDY_DAY:
			return "PARTLY_CLOUDY_DAY"
		case RAIN:
			return "RAIN"
		case SLEET:
			return "SLEET"
		case SNOW:
			return "SNOW"
		case WIND:
			return "WIND"
		case FOG:
			return "FOG"
		default:
			return "CLOUDY";
		
	}
};

/*const defaults = {
	icon: 'RAIN',
	color: 'goldenrod',
	size: 36,
	animate: true
  };*/
/*const getWeatherIcon = weatherState => {
	return (<ReactAnimatedWeather
		icon={defaults.icon}
		color={defaults.color}
		size={defaults.size}
		animate={defaults.animate}
	/>);
}*/
const getWeatherIcon = weatherState => {
	return (<ReactAnimatedWeather className= 'wicon' icon={stateToContinue(weatherState)} size = {36} color='goldenrod'/>);
};
const WeatherTemperature = ({tempeture, weatherState}) => (	
	
	<div className='weatherTempetureCont'>
		{getWeatherIcon(weatherState)}
		
		<span className= 'tempeture'>{`${tempeture} C°`}</span>
	</div>
);

WeatherTemperature.propTypes = {
	//tempeture: PropTypes.number,
	weatherState: PropTypes.string,
};

export default WeatherTemperature;

		
