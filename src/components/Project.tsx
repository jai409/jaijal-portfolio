import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://jai409.github.io/obstacle-detection-and-alert-system-robotics/ir-obstacle-detection-v2%20(1).html" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jai409.github.io/obstacle-detection-and-alert-system-robotics/ir-obstacle-detection-v2%20(1).html" target="_blank" rel="noreferrer"><h2>IR Obstacle Detection & Alert System</h2></a>
                <p>A robotics project featuring an infrared obstacle detection and alert system. Built using Arduino and IR sensors to detect objects in the robot's path and trigger real-time alerts.</p>
            </div>
            <div className="project">
                <a href="https://wokwi.com/projects/457099733760931841" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://wokwi.com/projects/457099733760931841" target="_blank" rel="noreferrer"><h2>Wokwi Embedded Simulation</h2></a>
                <p>An embedded systems simulation project built on the Wokwi platform. Demonstrates microcontroller programming and circuit simulation for hardware prototyping without physical components.</p>
            </div>
            <div className="project">
                <a href="https://jai409.github.io/robotics/dht11-monitor.html" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jai409.github.io/robotics/dht11-monitor.html" target="_blank" rel="noreferrer"><h2>DHT11 Temperature & Humidity Monitor</h2></a>
                <p>A real-time temperature and humidity monitoring system using the DHT11 sensor. The project reads environmental data via Arduino and displays live readings through a web-based dashboard.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;