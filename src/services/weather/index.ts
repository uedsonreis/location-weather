import { WeatherResponse } from "./model";

class WeatherService {

    private readonly openWeather = 'http://api.openweathermap.org/data/2.5';
    private readonly apiKey = '43673725cd57c414b12f4db0d5835ead';
    private readonly service = 'weather';

    public async getWeatherData(latitude: string, longitude: string): Promise<WeatherResponse> {
        const url = `${this.openWeather}/${this.service}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric&lang=pt`;
        return await fetch(url, { method: 'GET' }).then(res => res.json());
    }

}

export default new WeatherService();