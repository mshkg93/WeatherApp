import React, {useEffect, useContext} from 'react';
import {useDispatch} from 'react-redux';

import {CoordsContext} from './context/coordsContext';
import {fetchCityData, fetchCityName} from './store/weather-actions';

import WeatherContainer from './components/WeatherContainer';

import image from './assets/wallpaper.jpg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {lat, setLat, lng, setLng} = useContext(CoordsContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    lat &&
      lng &&
      dispatch(fetchCityData(lat, lng)) &&
      dispatch(fetchCityName(lat, lng));
  }, [dispatch, lat, lng]);

  return (
    <main
      className='min-w-[100vw]'
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
      <WeatherContainer />
    </main>
  );
}

export default App;
