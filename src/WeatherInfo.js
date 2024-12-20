import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <h2 className="mt-3">{props.data.city}</h2>
                <ul>
                    <li>
                        <FormattedDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">
                        {props.data.description}
                    </li>
                </ul>
                <div className="col-8">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} size={52} />
                        </div>
                        <div className="float-left">
                            <WeatherTemperature
                                celsius={props.data.temperature}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <ul>
                        <li>Humidity: {Math.round(props.data.humidity)}%</li>
                        <li>Wind: {Math.round(props.data.wind)}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
