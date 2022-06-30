import ToggleButtonsMultiple from './ToggleButtonsMetric';

export default function CurrentWeather({weather}) {
  return (
    <div className='flex flex-col min-w-full'>
      <div className='flex w-full justify-between'>
        <h3>Current Weather</h3>
        <ToggleButtonsMultiple />
      </div>
      <section className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <span className='flex gap-2'>
            <h4>Timezone: </h4> <p>{weather.timezone}</p>
          </span>
        </div>
      </section>
    </div>
  );
}
