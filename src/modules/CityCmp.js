import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 150px;
  height: 150px;
  margin: 40px auto;
`;

const WeatherLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 2px;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    color: white;
    background-color: #606060;
    cursor: pointer;
  }
`;

const CityCmp = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    // elements need to be covered by one tag
    <>
      <WeatherLogo src="/icon/logo.png"></WeatherLogo>
      <WeatherLabel>Find Weather of Your City</WeatherLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="City..."
          onChange={(e) => updateCity(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityCmp;
