import React from "react";
import Grid from "@material-ui/core/Grid";

export default function SavingThrow(props) {
  let savingThrow = props.mod
  return (
    <div align="center">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {props.name}
        </Grid>
        <Grid item xs={12}>
          {savingThrow}
        </Grid>
        <Grid item xs={6}>
          {props.modName} : {props.mod}
        </Grid>
        <Grid item xs={6}>
          PROF : ???
        </Grid>
        <Grid item xs={6}>
          ITEM : ???
        </Grid>
        <Grid item xs={6}>
          TEML : ???
        </Grid>
      </Grid>
    </div>
  )
}
