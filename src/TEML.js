import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function TEML(props) {
  const handleChange = value => event => {
    if (!event.target.checked) return props.callback(-2)
    props.callback(value)
  };

  let t = false
  let e = false
  let m = false
  let l = false

  if (props.value === 0) t = true
  if (props.value === 2) e = true
  if (props.value === 4) m = true
  if (props.value === 6) l = true

  return (
    <div >
      <FormControl component="fieldset" >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={t} onChange={handleChange(0)} value="t" />}
            label="T"
            labelPlacement="top"
          />
          <FormControlLabel
            control={<Checkbox checked={e} onChange={handleChange(2)} value="e" />}
            label="E"
            labelPlacement="top"
          />
          <FormControlLabel
            control={<Checkbox checked={m} onChange={handleChange(4)} value="m" />}
            label="M"
            labelPlacement="top"
          />
          <FormControlLabel
            control={<Checkbox checked={l} onChange={handleChange(6)} value="l" />}
            label="L"
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}