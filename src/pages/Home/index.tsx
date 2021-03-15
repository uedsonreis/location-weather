import React from 'react';
import { WeatherResponse } from '../../models';

import * as actions from './actions';

import './styles.css';

function Home() {

    const apiKey = '43673725cd57c414b12f4db0d5835ead';
    const openWeather = 'http://api.openweathermap.org/data/2.5';
    const service = 'weather';
    const latitude = "-12.9711";
    const longitude = "-38.5108";

    const url = `${openWeather}/${service}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    const [ data, setData ] = React.useState<WeatherResponse>();

    React.useEffect(() => {
        fetch(url, { method: 'GET' }).then(res => res.json()).then(response => {
            console.log(response);
            setData(response);
        });
    }, []);

    if (!data) return <span>Loading...</span>

    const { main, name, dt, sys, weather, wind } = data;

    return (
        <div className="container">
            <div className="header">
                <h2>Weather Forecast</h2>
            </div>

            <div className="info-cell">
                <h4>
                    {name} ({sys.country}) {actions.formatDate(new Date(dt))}
                </h4>
            </div>
            
            <div className="info-cell">
                <span>
                    Feels like: {actions.convertToCelcius(main.feels_like)} °C
                </span>
            </div>
            
            <div className="info-cell">
                <span>Temperature: {actions.convertToCelcius(main.temp)} °C</span> <br />
            </div>

            <div className="info-cell">
                <span>Degrees: {actions.convertToCelcius(wind.deg)} °C</span> <br />
            </div>

            <div className="info-cell">
                <span>Humidity: {main.humidity} %</span>
            </div>

            <div className="info-cell">
                <span>Wind speed: {wind.speed} mph</span>
            </div>

            { weather && weather.map(w => (
                <div className="info-cell" key={w.id}>
                    <span>Weather: {actions.formatText(w.description)}</span>
                </div>
            )) }
        </div>
    );
}

export default Home;