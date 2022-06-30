import {useSelector} from 'react-redux';

export default function DailyItem({weather}) {
  const {units} = useSelector((state) => state.weather);
  const getDayFromTimestamps = (hr) => {
    const date = new Date(hr * 1000);
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return (
      <span className='flex items-center justify-center w-20'>
        {weekday[date.getDay()].slice(0, 3)}
      </span>
    );
  };
  const matchUnitDegrees = (temp) => {
    return units === 'metric'
      ? `${Math.floor(temp)}℃`
      : `${Math.floor(temp * (9 / 5) + 32)}℉`;
  };
  return (
    <div className='flex flex-col items-center h-48 p-5 bg-white bg-opacity-25 rounded-lg'>
      {getDayFromTimestamps(weather?.dt)}
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt='Daily weather icon'
      />
      <p>{weather.weather[0].main}</p>
      <p>
        {matchUnitDegrees(weather.temp.max)}/
        {matchUnitDegrees(weather.temp.min)}
      </p>
    </div>
  );
}
