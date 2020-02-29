import React from "react";
import Input from "@material-ui/core/Input";

class AbilityScoreBox extends React.Component {
  onChange = (change) => {
    Object.assign(this.props.abilityScores, change)
    this.props.callback(change)
  }

  render() {
    return (
      <>
        <h1 align="center">Ability Scores</h1>
        <AbilityScore
          ability='Strength'
          score={this.props.abilityScores.Strength}
          callback={this.onChange}
        />
        <AbilityScoreMod
          mod={this.props.abilityScoreModifiers.Strength}
        />
        <AbilityScore
          ability='Dexterity'
          score={this.props.abilityScores.Dexterity}
          callback={this.onChange}
        />
        <AbilityScoreMod
          mod={this.props.abilityScoreModifiers.Dexterity}
        />
        <AbilityScore
          ability='Constitution'
          score={this.props.abilityScores.Constitution}
          callback={this.onChange}
        />
        <AbilityScoreMod
          mod={this.props.abilityScoreModifiers.Constitution}
        />
        <AbilityScore
          ability='Intelligence'
          score={this.props.abilityScores.Intelligence}
          callback={this.onChange}
        />
        <AbilityScoreMod
          mod={this.props.abilityScoreModifiers.Intelligence}
        />
        <AbilityScore
          ability='Wisdom'
          score={this.props.abilityScores.Wisdom}
          callback={this.onChange}
        />
        <AbilityScoreMod
          mod={this.props.abilityScoreModifiers.Wisdom}
        />
        <AbilityScore
          ability='Charisma'
          score={this.props.abilityScores.Charisma}
          callback={this.onChange}
        />
        <AbilityScoreMod
          mod={this.props.abilityScoreModifiers.Charisma}
        />
      </>
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
        <p>
          {this.props.ability}
        </p>
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
