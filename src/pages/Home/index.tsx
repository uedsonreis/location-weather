import React from 'react';

import { WeatherResponse } from '../../services/weather/model';
import weatherService from '../../services/weather';

import * as utils from '../../services/utils';
import './styles.css';

function Home() {

    const [ latitude, setLatitude ] = React.useState<string>("-12.97940480");
    const [ longitude, setLongitude ] = React.useState<string>("-38.44713680");
    const [ data, setData ] = React.useState<WeatherResponse>();
    
    React.useEffect(() => {
        if (latitude && longitude) {
            weatherService.getWeatherData(latitude, longitude).then(response => {
                console.log('Data: ', data);
                setData(response);
            });
        }
    }, [latitude, longitude]);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude.toFixed(8));
            setLongitude(longitude.toFixed(8));
        });
    } else {
        return <div>Your browser does not support it.</div>
    }

    if (!data) return (
        <div className="load-message">
            Loading... <br />
            Make sure your Geolocation is enabled.
        </div>
    )

    const { main, name, sys, weather, wind } = data;

    return (
        <div className="container">
            <div className="header">
                <h2>Previsão do Tempo</h2>
            </div>

            <div className="info-cell">
                <h4>
                    {name} ({sys.country}) {utils.formatDate(new Date())}
                </h4>
            </div>

            { weather && weather.map(w => (
                <div className="info-cell" key={w.id}>
                    <span>{utils.formatText(w.description)}</span>
                </div>
            )) }

            <div className="info-cell">
                <span>Temperatura: {main.temp} °C</span> <br />
            </div>
            
            <div className="info-cell">
                <span>
                    Sensação térmica: {main.feels_like} °C
                </span>
            </div>

            <div className="info-cell">
                <span>Humidade: {main.humidity} %</span>
            </div>

            <div className="info-cell">
                <span>Velocidade do vento: {utils.convertMphToKmh(wind.speed)} km/h</span>
            </div>
        </div>
    );
}

export default Home;