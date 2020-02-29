import React from "react";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

export default function AbilityScoreBox(props) {
  function callback(change) {
    Object.assign(props.abilityScores, change)
    props.callback(change)
  }
  return (
    <>
      <h1>Ability Scores</h1>
      <AbilityScoreEntry
        callback = {callback}
        score = {props.abilityScores.Strength}
        mod = {props.abilityScoreModifiers.Strength}
        ability = 'Strength'
      />
      <AbilityScoreEntry
        callback = {callback}
        score = {props.abilityScores.Dexterity}
        mod = {props.abilityScoreModifiers.Dexterity}
        ability = 'Dexterity'
      />
      <AbilityScoreEntry
        callback = {callback}
        score = {props.abilityScores.Constitution}
        mod = {props.abilityScoreModifiers.Constitution}
        ability = 'Constitution'
      />
      <AbilityScoreEntry
        callback = {callback}
        score = {props.abilityScores.Intelligence}
        mod = {props.abilityScoreModifiers.Intelligence}
        ability = 'Intelligence'
      />
      <AbilityScoreEntry
        callback = {callback}
        score = {props.abilityScores.Wisdom}
        mod = {props.abilityScoreModifiers.Wisdom}
        ability = 'Wisdom'
      />
      <AbilityScoreEntry
        callback = {callback}
        score = {props.abilityScores.Charisma}
        mod = {props.abilityScoreModifiers.Charisma}
        ability = 'Charisma'
      />
    </>
  )
}


class AbilityScoreEntry extends React.Component {
  callback = (change) => {
    this.props.callback(change)
  }

  render() {
    return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <p>{this.props.ability}</p>
      </Grid>
      <Grid item xs={2}>
        <AbilityScore
          ability={this.props.ability}
          score={this.props.score}
          callback={this.callback}
        />
      </Grid>
      <Grid item xs={2}>
        <AbilityScoreMod
          mod={this.props.mod}
        />
      </Grid>
    </Grid>
    )
  }
}

class AbilityScoreMod extends React.Component {
  render() {
    let mod = this.props.mod
    if (mod > 0) {
      mod = '+' + mod
    }
    return (
      <>
        <p>{mod}</p>
      </>
    )
  }
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
