import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000),
            wind: response.data.wind.speed,
            description: response.data.condition.description,
            city: response.data.city,
            iconUrl: response.data.condition.icon_url,
        });
    }

    function search() {
        const apiKey = "5tf352bo163f33b3840bd4ca51872c55";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="container">
                    <h1 className="mt-4">Weather App</h1>
                    <form onSubmit={handleSubmit} className="mt-3">
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="search"
                                    placeholder="Enter a city…"
                                    autoFocus={true}
                                    className="form-control"
                                    onChange={handleCityChange}
                                />
                            </div>
                            <div className="col-3">
                                <input
                                    type="submit"
                                    value="Search"
                                    className="search-btn"
                                />
                            </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData} />
                    <WeatherForecast coordinates={weatherData.coordinates} />
                </div>
            </div>
        );
    } else {
        search();
        return "Loading…";
    }
}
