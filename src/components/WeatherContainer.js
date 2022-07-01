import React, {useEffect} from 'react';

import {Container} from '@mui/material';

import WeatherForm from './WeatherForm';
import Weather from './Weather';

const WeatherContainer = ({data}) => {
  return (
    <Container>
      <Container>
        <WeatherForm />
        <Weather />
      </Container>
    </Container>
  );
};

export default WeatherContainer;
