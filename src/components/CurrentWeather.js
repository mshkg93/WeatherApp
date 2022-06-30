// import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {SwitchLabels, SwitchDaily} from './ToggleButtonsMetric';

export default function CurrentWeather({weather}) {
  const {current} = weather;
  const {name, country} = weather[0] || [];
  const units = useSelector((state) => state.weather.units);

  // Convert API timestamp to UNIX timestamp => get hours and minutes from converted timestamp
  const getHourFromTimestamps = (hr) => {
    const date = new Date(hr * 1000);
    return `${date.getHours()}:${
      date.getMinutes() < 10
        ? 0 + date.getMinutes()
        : date.getMinutes()
    }`;
  };

  // Convert metric temperature units to imperial and vice versa
  const matchUnitDegrees = () => {
    return units === 'metric'
      ? current?.temp.toFixed(2)
      : (current?.temp * (9 / 5) + 32).toFixed(2);
  };

  // Convert metric speed units to imperial and vice versa
  const matchUnitSpeed = (speed) => {
    return units === 'metric'
      ? speed
      : (speed * 2.23693629).toFixed(2);
  };

  // console.log(current);
  return (
    <div className='flex flex-col p-4 text-white min-w-full bg-black bg-opacity-30 rounded-lg'>
      <div className='flex w-full justify-between'>
        <h3>Current Weather</h3>
        <div className='flex flex-col'>
          <SwitchLabels />
          <SwitchDaily />
        </div>
      </div>
      <section className='grid w-full grid-cols-1 md:grid-cols-2'>
        <div className='w-[50%]'>
          <span className='flex gap-2 '>
            <h4>City: </h4>{' '}
            <p>{name && country && `${name}, ${country}`}</p>
          </span>
          <div className='flex'>
            <div className='flex flex-col items-center'>
              {current && (
                <img
                  src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`}
                  alt='Actual weather icon'
                />
              )}
              <p>
                {current?.weather[0]?.description[0]?.toUpperCase()}
                {current?.weather[0]?.description?.slice(1)}
              </p>
            </div>
            <h2 className='flex items-center text-xl -translate-y-3'>
              {matchUnitDegrees() || ''}
              {current && (units === 'metric' ? '℃' : '℉')}
            </h2>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-4 md:mt-0 '>
          <div className=''>
            <span className='m-4'>
              <p>Sunrise: </p>
              <p>
                {(current &&
                  getHourFromTimestamps(current?.sunrise)) ||
                  ''}
              </p>
            </span>
            <span className='m-4'>
              <p>Sunset: </p>
              <p>
                {current && getHourFromTimestamps(current?.sunset)}
              </p>
            </span>
            <span className='m-4'>
              <p>Wind speed: </p>
              <p>
                {matchUnitSpeed(current?.wind_speed)}{' '}
                {current && (units === 'metric' ? 'm/s' : 'mph')}
              </p>
            </span>
          </div>

          <div>
            <span className='m-4'>
              <p>Wind gust: </p>
              <p>
                {matchUnitSpeed(current?.wind_gust)}{' '}
                {current && (units === 'metric' ? 'm/s' : 'mph')}
              </p>
            </span>
            <span className='m-4'>
              <p>Pressure: </p>
              <p>{current && `${current.pressure} hPa`}</p>
            </span>
            <span className='m-4'>
              <p>Humidity: </p>
              <p>{current && `${current.humidity}%`}</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
