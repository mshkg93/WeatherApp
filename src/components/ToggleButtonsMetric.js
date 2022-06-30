import {useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  const [switchValue, setSwitchValue] = useState(
    'metric' || 'imperial'
  );

  const switchHandler = () => {
    setSwitchValue((prevState) =>
      prevState === 'metric' ? 'imperial' : 'metric'
    );
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onChange={switchHandler} />}
        label={switchValue === 'metric' ? '℃' : '℉'}
      />
    </FormGroup>
  );
}
