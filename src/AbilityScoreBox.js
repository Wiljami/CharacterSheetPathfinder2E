import React from "react";
import AbilityScoreEntry from "./AbilityScoreEntry";

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
