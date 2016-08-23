import React from 'react';
import $ from 'jquery';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
    navigator.geolocation.getCurrentPosition(this.setLocation.bind(this));
  }

  setLocation(position) {
    let request = {
      appid: "7149e5696f085445e9a945d9d37b3ebc",
      lon: position.coords.longitude,
      lat: position.coords.latitude
    };

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: request,
      success: this.setWeather.bind(this)
    });
  }

  setWeather(weather) {
    this.setState({weather});
  }

  render() {
    if (Object.keys(this.state.weather).length === 0) {
      return <div>Loading weather...</div>;
    }
    // debugger
    let temp = Math.floor(this.state.weather.main.temp * (9 / 5) - 459.67);
    let conditions = this.state.weather.weather[0].description;
    let city = "Don't you know?";

    return (
    <div>
      <h1>City: { city }</h1>
      <h3>Condition: { conditions }, Temp: { temp }f</h3>
    </div>
    );
  }

}
export default Weather;
