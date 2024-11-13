import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    console.log(props);

    let apiKey = "5tf352bo163f33b3840bd4ca51872c55";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <div className="WeatherForecast-icon">
                        <WeatherIcon code="clear-sky-night" size={36} />
                    </div>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temp-max">19º</span>
                        <span className="WeatherForecast-temp-min">10º</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
