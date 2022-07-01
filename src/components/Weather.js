import {useSelector} from 'react-redux';
import {Container} from '@mui/material';

import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import WeeklyWeather from './WeeklyForecast';

export default function Weather() {
  const {data, cityData} = useSelector((state) => state?.weather);

  const {weekly} = useSelector((state) => state.weather);
  const aggregatedData = {...data, ...cityData[0]};

  return (
    <Container className='flex flex-col p-5 mt-6    gap-4  rounded-md z-10 md:justify-items-center '>
      <CurrentWeather weather={aggregatedData || []} />
      {weekly ? <WeeklyWeather /> : <HourlyForecast />}
    </Container>
  );
}
