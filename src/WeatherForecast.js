import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <div className="WeatherForecast-icon">
                        <WeatherIcon code="clear-sky-night" />
                    </div>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temp-max">19</span>
                        <span className="WeatherForecast-temp-min">10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
