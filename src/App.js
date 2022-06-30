import React, {useState, useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

import {CoordsContext} from './context/coordsContext';
// import CoordsContextProvider from './context/CoordsContextProvider';
import WeatherContainer from './components/WeatherContainer';

import {fetchCityData} from './store/weather-actions';

import {Container} from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import {DownloadingSharp} from '@mui/icons-material';
import image from './assets/weather-main.jpg';
import './App.css';

function App() {
  const {isLoading, error, data} = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const dispatch = useDispatch();
  const {lat, setLat, lng, setLng} = useContext(CoordsContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
    // dispatch(fetchCityData(lat, lng));
  }, [lat, lng]);

  useEffect(() => {
    lat !== 'null' &&
      lng !== 'null' &&
      dispatch(fetchCityData(lat, lng));
  }, [dispatch, lat, lng]);

  // console.log(data);
  return (
    <main
      className='min-w-[100vw]'
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
      <WeatherContainer>
        <DownloadingSharp />
      </WeatherContainer>
      <Container>
        {loading && <LoopIcon />}
        {/* {{lat};{lng}} */}
      </Container>
    </main>
  );
}

export default App;
