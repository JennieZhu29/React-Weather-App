import styled from "styled-components";

export const WeatherInfoIcons = {
  Sunset: "./React-Weather-App/icon/sun.png",
  Sunrise: "./React-Weather-App/icon/sun.png",
  Humidity: "./React-Weather-App/icon/water.png",
  Wind: "./React-Weather-App/icon/wind.png",
  Pressure: "./React-Weather-App/icon/pressure.png",
};

// weather logos for diff conditions
export const WeatherLogos = {
  "01d": "./React-Weather-App/icon/weathers/clear-sky.png",
  "01n": "./React-Weather-App/icon/weathers/clear-n.png",
  "02d": "./React-Weather-App/icon/weathers/few-clouds.png",
  "02n": "./React-Weather-App/icon/weathers/broken-clouds.png",
  "03d": "./React-Weather-App/icon/weathers/scattered-clouds.png",
  "03n": "./React-Weather-App/icon/weathers/scattered-clouds.png",
  "04d": "./React-Weather-App/icon/weathers/broken-clouds.png",
  "04n": "./React-Weather-App/icon/weathers/broken-clouds.png",
  "09d": "./React-Weather-App/icon/weathers/shower-rain.png",
  "09n": "./React-Weather-App/icon/weathers/shower-rain.png",
  "10d": "./React-Weather-App/icon/weathers/rain.png",
  "10n": "./React-Weather-App/icon/weathers/rain-n.png",
  "11d": "./React-Weather-App/icon/weathers/thunderstorm.png",
  "11n": "./React-Weather-App/icon/weathers/thunderstorm.png",
  "13d": "./React-Weather-App/icon/weathers/snow.png",
  "13n": "./React-Weather-App/icon/weathers/snow.png",
  "50d": "./React-Weather-App/icon/weathers/mist.png",
  "50n": "./React-Weather-App/icon/weathers/mist.png",
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
  text-transform: capitalize;
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
          <span>{`${Math.floor(weather?.main?.temp - 273)} °C `}</span>
          {`| ${weather?.weather[0].description}`}
        </TempCondition>
        <WeatherLogo src={WeatherLogos[weather?.weather[0].icon]}></WeatherLogo>
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherLabel>Weather Info</WeatherLabel>
      <WeatherInfoContainer>
        <WeatherInfo
          name={isDay ? "Sunset" : "Sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfo name="Humidity" value={weather?.main?.humidity} />
        <WeatherInfo name="Wind" value={weather?.wind?.speed} />
        <WeatherInfo name="Pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherInfoCmp;
