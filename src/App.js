import styled from "styled-components";
import CityCmp from "./modules/CityCmp";
import WeatherInfoCmp from "./modules/WeatherInfoCmp";
import axios from "axios";

import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  background-color: #e8e8e8;
  width: 380px;
  font-family: "Montserrat";
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    // error action
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`
    );
    updateWeather(response.data);
  };
  return (
    <>
      <Container>
        <AppLabel>React Weather App</AppLabel>
        {weather ? (
          <WeatherInfoCmp weather={weather} />
        ) : (
          <CityCmp updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
      </Container>
    </>
  );
}

export default App;
