import {setData, setCityData} from './weatherSlice';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const fetchCityData = (lat, lon) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response?.json();

      return data;
    };

    try {
      const weatherData = await fetchData();
      dispatch(setData(weatherData));
    } catch (err) {
      throw new Error(
        `Something went wrong! ${err.message[0].toUpperCase()}${err.message.slice(
          1
        )}`
      );
    }
  };
};

export const fetchCityName = (lat, lon) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      return await data;
    };
    try {
      const cityData = await fetchData();
      dispatch(setCityData(cityData));
    } catch (err) {
      throw new Error('Something went wrong!' + err.message);
    }
  };
};
