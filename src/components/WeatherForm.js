import {useState, useRef, useContext} from 'react';

import {useDispatch} from 'react-redux';

import {CoordsContext} from '../context/coordsContext';

import {fetchCityData, fetchCityName} from '../store/weather-actions';

import {Button} from '@mui/material';

export default function Form() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const {lat, setLat, lng, setLng} = useContext(CoordsContext);
  const [city, setCity] = useState('');
  const cityInput = useRef(null);
  const dispatch = useDispatch();

  async function fetchCityCoordsHandler() {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.current.value}&appid=${API_KEY}`
    );
    const data = await response.json();
    setLat(data[0].lat);
    setLng(data[0].lon);
  }

  async function fetchData() {
    (await dispatch(fetchCityData(lat, lng))) &&
      (await dispatch(fetchCityName(lat, lng)));
  }

  async function submitFormHandler(e) {
    e.preventDefault();
    cityInput.current.value !== '' && fetchCityCoordsHandler();
    lat && lng && (await fetchData());
  }

  return (
    <form
      onSubmit={submitFormHandler}
      className='grid grid-cols-1 p-5 pt-10 bg-black bg-opacity-30  gap-4  rounded-md z-10 md:justify-items-center md:grid-cols-2'
      style={{
        color: 'white',
      }}>
      <label htmlFor={cityInput} className='flex'>
        <input
          type='text'
          ref={cityInput}
          id='cityInput'
          style={{
            border: '2px solid grey',
            outline: 'none',
          }}
          className='rounded-md p-3 w-full bg-slate-100 opacity-30 hover:opacity-80 active:opacity-80 text-black md:min-w-[350px] md:max-w-[500px]'
          placeholder='Type desired city'
          onChange={(e) => setCity(e.target.value)}
        />
      </label>

      <Button
        type='submit'
        variant='outlined'
        disabled={!city}
        style={{
          color: 'white',
          borderColor: 'grey',
          opacity: '70%',
        }}
        className='w-full shadow-lg bg-black bg-opacity-30 transition-transform md:max-w-[150px] hover:scale-[105%] hover:shadow-xl disabled:opacity-10'>
        Submit
      </Button>
    </form>
  );
}
