import React from "react";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

class AbilityScoreBox extends React.Component {
  callback = (change) => {
    Object.assign(this.props.abilityScores, change)
    this.props.callback(change)
  }

  render() {
    return (
      <div align="center">
        <h1>Ability Scores</h1>
        <AbilityScoreEntry
          callback = {this.callback}
          score = {this.props.abilityScores.Strength}
          mod = {this.props.abilityScoreModifiers.Strength}
          ability = 'Strength'
        />
        <AbilityScoreEntry
          callback = {this.callback}
          score = {this.props.abilityScores.Dexterity}
          mod = {this.props.abilityScoreModifiers.Dexterity}
          ability = 'Dexterity'
        />
        <AbilityScoreEntry
          callback = {this.callback}
          score = {this.props.abilityScores.Constitution}
          mod = {this.props.abilityScoreModifiers.Constitution}
          ability = 'Constitution'
        />
        <AbilityScoreEntry
          callback = {this.callback}
          score = {this.props.abilityScores.Intelligence}
          mod = {this.props.abilityScoreModifiers.Intelligence}
          ability = 'Intelligence'
        />
        <AbilityScoreEntry
          callback = {this.callback}
          score = {this.props.abilityScores.Wisdom}
          mod = {this.props.abilityScoreModifiers.Wisdom}
          ability = 'Wisdom'
        />
        <AbilityScoreEntry
          callback = {this.callback}
          score = {this.props.abilityScores.Charisma}
          mod = {this.props.abilityScoreModifiers.Charisma}
          ability = 'Charisma'
        />
      </div>
    )
  }
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

export default AbilityScoreBox
