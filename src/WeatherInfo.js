import React from "react";
import FormattedDate from "./FormattedDate";

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
                        <img
                            src={props.data.iconUrl}
                            alt={props.data.description}
                            className="float-left"
                        />
                        <div className="float-left">
                            <span className="temperature">
                                {Math.round(props.data.temperature)}
                            </span>
                            <span className="unit">ºC</span>
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
