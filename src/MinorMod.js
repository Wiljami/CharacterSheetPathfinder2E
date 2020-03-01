import React from "react";
import Grid from "@material-ui/core/Grid";
import Primary from "./Primary";

export default function MinorMod(props) {
  return(
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Primary>{props.name}</Primary>
        </Grid>
        <Grid item xs={12}>
          <Primary>{props.value}</Primary>
        </Grid>
      </Grid>
    </>
  )
}
