import {useSelector, useDispatch} from 'react-redux';
import {Container} from '@mui/material';

import CurrentWeather from './CurrentWeather';

export default function Weather() {
  const {data} = useSelector((state) => state?.weather);
  const {current, hourly} = useSelector(
    (state) => state?.weather?.data
  );
  console.log(data);
  return (
    <Container className='flex flex-col p-5 mt-6  bg-black bg-opacity-20  gap-4  rounded-md z-10 md:justify-items-center '>
      {/*Current weather*/}
      <CurrentWeather weather={data || []} />
      {/*minutely weather*/}
      {/*hourly weather*/}
      {/*daily weather*/}
    </Container>
  );
}
