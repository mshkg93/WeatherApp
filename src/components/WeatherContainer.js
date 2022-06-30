import React, {useState, useEffect, useContext} from 'react';

import {Container} from '@mui/material';

import WeatherForm from './WeatherForm';
import Weather from './Weather';

const WeatherContainer = ({data}) => {
  useEffect(() => {}, []);
  return (
    <Container>
      {/* Weather App based by user coordinations. Or user input :) */}
      <Container>
        <WeatherForm />
        <Weather />
      </Container>
    </Container>
  );
};

export default WeatherContainer;
