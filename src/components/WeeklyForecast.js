import {useSelector} from 'react-redux';
import DailyItem from './DailyItem';
export default function WeeklyWeather() {
  const {daily} = useSelector((state) => state?.weather?.data);
  console.log(daily);
  return (
    <div className='mt-14 flex gap-4 p-4 text-white min-w-full bg-black bg-opacity-30 rounded-lg overflow-scroll'>
      {daily &&
        daily.map((item) => (
          <DailyItem weather={item} key={item.dt} />
        ))}
    </div>
  );
}
