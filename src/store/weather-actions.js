import {setData, setIsLoading, setError} from './weatherSlice';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const fetchCityData = (lat, lon) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response?.json();
      console.log(data);
      return data;
    };

    try {
      const weatherData = await fetchData();
      dispatch(setData(weatherData));
    } catch (err) {
      console.log(err);
    }
  };
};
