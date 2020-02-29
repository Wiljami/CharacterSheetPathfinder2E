import React from "react";
import Grid from "@material-ui/core/Grid";
import AbilityScoreMod from "./AbilityScoreMod";
import AbilityScore from "./AbilityScore";

export default function AbilityScoreEntry(props) {
  function callback(change) {
    props.callback(change)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <p>{props.ability}</p>
      </Grid>
      <Grid item xs={2}>
        <AbilityScore
          ability={props.ability}
          score={props.score}
          callback={callback}
        />
      </Grid>
      <Grid item xs={2}>
        <AbilityScoreMod
          mod={props.mod}
        />
      </Grid>
    </Grid>
  )
}
