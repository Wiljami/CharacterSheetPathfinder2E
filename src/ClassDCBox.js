import React from "react";
import Grid from '@material-ui/core/Grid'
import MinorMod from './MinorMod'
import TEML from './TEML'

export default function ClassDCBox(props) {

  function callback(value) {
    props.callback({DCProf : value})
  }

  return (
    <>
      <h1>Class DC</h1>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          Total
        </Grid>
        <Grid item xs={2}>
          <MinorMod name='DC BASE' value='10'/>
        </Grid>
        <Grid item xs={2}>
          KEY
        </Grid>
        <Grid item xs={2}>
          <MinorMod name='PROF' value ='10'/>
        </Grid>
        <Grid item xs={2}>
          <TEML
            callback={callback}
            value={props.dcProf}
          />
        </Grid>
        <Grid item xs={2}>
          <MinorMod name='ITEM' value = ''/>
        </Grid>
      </Grid>
    </>
  )
}
