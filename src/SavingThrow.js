import React from "react";
import Grid from "@material-ui/core/Grid";
import MinorMod from "./MinorMod";
import Primary from "./Primary";
import Major from "./Major";

export default function SavingThrow(props) {
  let savingThrow = props.mod
  return (
    <div align="center">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Major>{props.name}</Major>
        </Grid>
        <Grid item xs={12}>
          <Major>{savingThrow}</Major>
        </Grid>
        <Grid item xs={6}>
          <MinorMod name={props.modName} value={props.mod}/>
        </Grid>
        <Grid item xs={6}>
          <MinorMod name='PROF' value='???'/>
        </Grid>
        <Grid item xs={6}>
          <MinorMod name='ITEM' value='???'/>
        </Grid>
        <Grid item xs={6}>
          <Primary>TEML</Primary>
        </Grid>
      </Grid>
    </div>
  )
}
