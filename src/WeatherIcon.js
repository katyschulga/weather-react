import React from "react";

export default function WeatherIcon(props) {
    console.log(props.code);

    return (
        <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
        />
    );
}
