import {useSelector, useDispatch} from 'react-redux';

import {setUnits, setWeekly} from '../store/weatherSlice';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function SwitchLabels() {
  const switchValue = useSelector((state) => state.weather.units);
  const dispatch = useDispatch();

  //Function changing out preferred units in redux store
  const switchHandler = () => {
    dispatch(setUnits());
  };

  return (
    <div className='flex justify-end mr-2'>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked onChange={switchHandler} />}
          label={switchValue === 'metric' ? '℃' : '℉'}
        />
      </FormGroup>
    </div>
  );
}

export function SwitchDaily() {
  const dispatch = useDispatch();

  const switchHandler = () => {
    dispatch(setWeekly());
  };
  return (
    <FormGroup>
      <div className='flex items-center'>
        <p className='mr-2'>Daily</p>
        <FormControlLabel
          control={<Switch defaultChecked onChange={switchHandler} />}
          label={'48h'}
        />
      </div>
    </FormGroup>
  );
}
