import React from "react";
import Grid from "@material-ui/core/Grid";
import SkillEntry from "./SkillEntry";

export default function SkillBox(props)  {
  function callback(change) {
    props.callback({skills: Object.assign(props.skills, change)})
  }

  return (
    <>
      <h1>Skills</h1>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Acrobatics'
            abilityName = 'DEX'
            armorCheckPenalty = {true}
            abilityMod = {props.abilityScoreModifiers.Dexterity}
            teml = {props.skills.Acrobatics}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Arcana'
            abilityName = 'INT'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Intelligence}
            teml = {props.skills.Arcana}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Athletics'
            abilityName = 'STR'
            armorCheckPenalty = {true}
            abilityMod = {props.abilityScoreModifiers.Strength}
            teml = {props.skills.Athletics}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
      </Grid>
    </>
  )
}
