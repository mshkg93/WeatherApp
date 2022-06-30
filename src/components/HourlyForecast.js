import {useSelector} from 'react-redux';
import HourlyItem from './HourlyItem';
export default function HourlyForecast() {
  const hourly = useSelector((state) => state.weather.data?.hourly);
  console.log(hourly);
  return (
    <div className='mt-14 flex gap-4 p-4 text-white min-w-full bg-black bg-opacity-30 rounded-lg overflow-scroll'>
      {hourly &&
        hourly.map((item) => (
          <HourlyItem weather={item} key={item.dt} />
        ))}
    </div>
  );
}
