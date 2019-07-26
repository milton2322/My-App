import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import transforWeather from '../../services/transformWeather';
import WeatherData from './WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';

const api_key ="30c7e4e5097e8f650b23c7225eee4c53";
const url = `http://api.openweathermap.org/data/2.5/weather`;

class WeatherLocation extends Component {

    constructor({ city }){
        super();
        this.state = {
            city,
            data: null
        }; 
    }    
    

    componentWillMount () { 

        const { city } =this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        console.log( api_weather );
        fetch(api_weather).then(data => {
            return data.json();
        }).then( weather_data => {
            console.log('weatherLocation', weather_data);
            const data = transforWeather(weather_data);
            this.setState({ data });
            
        });
        
    }

    

    render = () => {    
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return(
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city} />
            { data ? <WeatherData data={data} /> :
                <CircularProgress size={5} thickness={5} />
            } 
                        
        </div>  
        )

    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;