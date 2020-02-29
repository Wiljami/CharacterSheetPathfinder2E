import React from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import AbilityScoreMod from "./AbilityScoreMod";

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

class AbilityScore extends React.Component {
  onChange = (event) => {
    let number = Number(event.target.value)
    let change = {[this.props.ability] : number}
    this.props.callback(change)
  }

  render() {
    return <>
      <Input
        value = {this.props.score}
        onChange = {this.onChange}
        inputProps={{
          min: 0,
          max: 100,
          type: 'number'
        }}
      />
    </>
  }
}
