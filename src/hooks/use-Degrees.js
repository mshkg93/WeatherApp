import {useState} from 'react';
import {useSelector} from 'react-redux';

export default function useDegrees(deg) {
  const [degrees, setDegrees] = useState(0);
  const unit = useSelector((state) => state.weather.units);

  function switchDegrees() {
    switch (unit) {
      case 'metric': {
        setDegrees(deg - 273.15);
        break;
      }
      case 'imperial': {
        setDegrees(deg * (9 / 5) - 459.67);
        break;
      }
      default:
        return degrees;
    }
  }
  switchDegrees();
  // (() => {
  //   (unit === ' metric' && setDegrees((prevState) => deg - 273.15)) ||
  //     (unit === 'imperial' &&
  //       setDegrees((prevState) => deg * (9 / 5) - 459.67));
  // })();
  return degrees;
}
