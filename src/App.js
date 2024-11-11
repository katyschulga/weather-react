import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Glasgow" />
                <footer>
                    This project was coded by Katy Schulga, and is{" "}
                    <a
                        href="https://github.com/katyschulga/weather-react"
                        target="_blank"
                        rel="noreferrer">
                        open sourced on GitHub
                    </a>
                </footer>
            </div>
        </div>
    );
}
