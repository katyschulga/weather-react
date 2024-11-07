import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            description: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
        });
    }

    if (weatherData.ready) {
        return (
            <div className="App">
                <div className="container">
                    <h1 className="mt-4">Weather App</h1>
                    <form>
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="search"
                                    placeholder="Enter a city…"
                                    autoFocus={true}
                                    className="form-control"
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
                    <div className="row">
                        <h2 className="mt-3">Glasgow</h2>
                        <ul>
                            <li>Wednesday, 6 November 18:00</li>
                            <li className="text-capitalize">
                                {weatherData.description}
                            </li>
                        </ul>
                        <div className="col-8">
                            <div className="clearfix">
                                <img
                                    src={weatherData.iconUrl}
                                    alt={weatherData.description}
                                    className="float-left"
                                />
                                <div className="float-left">
                                    <span className="temperature">
                                        {Math.round(weatherData.temperature)}
                                    </span>
                                    <span className="unit">ºC</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li>
                                    Humidity: {Math.round(weatherData.humidity)}
                                    %
                                </li>
                                <li>
                                    Wind: {Math.round(weatherData.wind)}km/h
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "5tf352bo163f33b3840bd4ca51872c55";
        let city = "Glasgow";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return "Loading…";
    }
}
