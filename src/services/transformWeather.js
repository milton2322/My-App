import convert from 'convert-units';
import {CLOUDY,CLEAR_DAY,        
        RAIN,SNOW,FOG} from '../constants/Weathers';



const getTemp = kelvin => {
    return Number (convert(kelvin).from('K').to('C')).toFixed(2);//.toFixed(2) cuando los valores son muy grandes con esto los recorta
}

const getWeatherState = (weather) => {

    const { id } = weather[0];

    if (id < 300) {
        return FOG
    } else if (id < 400) {
        return FOG
    } else if (id < 600) {
        return RAIN
    } else if (id < 700) {
        return SNOW
    } else if (id === 800) {
        return CLEAR_DAY
    }else{
        return CLOUDY;
    }
    
}

const transforWeather = weather_data => {
    const { weather } = weather_data;
    const { humidity, temp } = weather_data.main; 
    console.log(humidity); 
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather);
    const tempeture= getTemp(temp);
    //debugger;
    const data = {
        humidity,
        tempeture,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transforWeather;
