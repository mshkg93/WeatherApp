import {useSelector} from 'react-redux';
export default function HourlyItem({weather}) {
  const units = useSelector((state) => state.weather.units);
  const getDateAndHourFromTimestamps = (hr) => {
    const date = new Date(hr * 1000);
    return (
      <div className='flex flex-col items-center'>
        <h3 className='text-lg font-semibold'>
          {date.getDate()}.
          {date.getMonth() < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth()}
        </h3>
        <p className='text-lg font-semibold'>{date.getHours()}:00</p>
      </div>
    );
  };
  const matchUnitDegrees = () => {
    return units === 'metric'
      ? `${Math.floor(weather?.temp)}℃`
      : `${Math.floor(weather?.temp * (9 / 5) + 32)}℉`;
  };

  return (
    <div className='flex flex-col items-center h-48 p-5 bg-white bg-opacity-25 rounded-lg'>
      <div className='w-20 '>
        {getDateAndHourFromTimestamps(weather.dt)}
      </div>

      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt='Hourly weather icon'
      />

      <h2>{matchUnitDegrees()}</h2>
    </div>
  );
}
