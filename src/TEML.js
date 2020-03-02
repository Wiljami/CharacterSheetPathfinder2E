import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";

export default function TEML(props) {
  const handleChange = value => event => {
    if (!event.target.checked) return props.callback(-2)
    props.callback(value)
  };

  const checkboxStyle = {
    margin: -3,
    padding: 0,
    display:'block',
    overflow: 'hidden'
  }

  let t = false
  let e = false
  let m = false
  let l = false

  if (props.value === 0) t = true
  if (props.value === 2) e = true
  if (props.value === 4) m = true
  if (props.value === 6) l = true

  return (
    <>
      <Grid container spacing={2}>
        <Grid container spacing={0} justify="center">
          T<Checkbox checked={t} onChange={handleChange(0)} style={checkboxStyle} value="Trained" />
          <Checkbox checked={e} onChange={handleChange(2)} style={checkboxStyle} value="Expert" />
          <Checkbox checked={m} onChange={handleChange(4)} style={checkboxStyle} value="Master" />
          <Checkbox checked={l} onChange={handleChange(6)} style={checkboxStyle} value="Legendary" />
        </Grid>
      </Grid>
    </>
  )
}