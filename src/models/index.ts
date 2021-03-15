
export interface WeatherResponse {
    id: number;
    cod: number;
    base: string;
    dt: number;
    clouds: Clouds;
    coord: Coordinate;
    main: Main;
    name: string;
    sys: System;
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: Wind;
}

export interface Clouds {
    all: number;
}

export interface Coordinate {
    lat: number;
    lon: number;
}

export interface Main {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface System {
    country: string;
    sunrise: number;
    sunset: number;
    type: number;
}

export interface Weather {
    id: number;
    icon: string;
    description: string;
    main: string;
}

export interface Wind {
    deg: number;
    speed: number;
}