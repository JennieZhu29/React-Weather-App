import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/icon/sun.png",
  Sunrise: "/icon/sun.png",
  Humidity: "/icon/water.png",
  Wind: "/icon/wind.png",
  Pressure: "/icon/pressure.png",
};

// weather logos for diff conditions
export const WeatherLogos = {
  "01d": "/icon/sunny.png",
  "01n": "/icon/night.png",
  "02d": "/icon/day.png",
  "02n": "/icon/cloudy-night.png",
  "03d": "/icon/cloudy.png",
  "03n": "/icon/cloudy.png",
  "04d": "/icon/perfect-day.png",
  "04n": "/icon/cloudy-night.png",
  "9d": "/icon/rain.png",
  "09n": "/icon/rain-night.png",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const TempCondition = styled.div`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  /* text-align: start; */
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  font-size: 14px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  /* height: 36px; */
`;
const InfoLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  font-size: 14px;
  & span {
    font-size: 14px;
    text-transform: capitalize;
  }
`;
const WeatherInfo = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]}></InfoIcon>
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherInfoCmp = (props) => {
  const { weather } = props;
  // tell location is currently day or night
  const isDay = weather?.weather[0].icon?.includes("d");
  // turn time format to hrs:min
  const getTime = (timestamp) => {
    return `${new Date(timestamp * 1000).getHours()}: ${new Date(
      timestamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherCondition>
        <TempCondition>
          <span>{`${Math.floor(weather?.main?.temp - 273)} °C`}</span>
          {`| ${weather?.weather[0].description}`}
        </TempCondition>
        <WeatherLogo src="/icon/weather.png"></WeatherLogo>
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherLabel>Weather Info</WeatherLabel>
      <WeatherInfoContainer>
        {/* value={weather?.sys?.sunrise}  */}
        <WeatherInfo
          name={isDay ? "Sunset" : "Sunrise"}
          value={getTime(weather?.sys[isDay ? "Sunset" : "Sunrise"])}
        />
        <WeatherInfo name="Humidity" value={weather?.main?.humidity} />
        <WeatherInfo name="Wind" value={weather?.wind?.speed} />
        <WeatherInfo name="Pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherInfoCmp;
