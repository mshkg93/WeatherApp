import {useState, useRef, useContext} from 'react';

import {useDispatch} from 'react-redux';

import {CoordsContext} from '../context/coordsContext';

import {fetchCityData, fetchCityName} from '../store/weather-actions';
import {Button, TextField} from '@mui/material';

export default function Form() {
  const {lat, lng} = useContext(CoordsContext);
  const [city, setCity] = useState('');
  const cityInput = useRef(null);

  const dispatch = useDispatch();

  function submitFormHandler(e) {
    e.preventDefault();
    cityInput.current.value === '' &&
      dispatch(fetchCityData(lat, lng)) &&
      dispatch(fetchCityName(lat, lng));
  }

  return (
    <form
      onSubmit={submitFormHandler}
      className='grid grid-cols-1 p-5 pt-10 bg-black bg-opacity-20  gap-4  rounded-md z-10 md:justify-items-center md:grid-cols-2'
      style={{
        color: 'white',
      }}>
      <label htmlFor={cityInput}>
        <TextField
          className='w-full text-white md:w-[350px] md:max-w-[500px]'
          id='filled'
          type='text'
          label='Type desired city'
          value={city}
          inputRef={cityInput}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>

      <Button
        type='submit'
        variant='outlined'
        style={{
          color: 'white',
        }}
        className='w-full shadow-lg bg-black bg-opacity-30 transition-transform md:max-w-[150px] hover:scale-[105%] hover:shadow-xl disabled:opacity-10'>
        Submit
      </Button>
    </form>
  );
}
