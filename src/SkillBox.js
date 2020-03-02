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
            abilityMod = {props.abilityScoreModifiers.Dexterity}
            abilityName = 'DEX'
            armorCheckPenalty = {true}
            callback = {callback}
            teml = {props.skills.Acrobatics}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Arcana'
            abilityMod = {props.abilityScoreModifiers.Intelligence}
            abilityName = 'INT'
            armorCheckPenalty = {false}
            callback = {callback}
            teml = {props.skills.Arcana}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Athletics'
            abilityMod = {props.abilityScoreModifiers.Strength}
            abilityName = 'STR'
            armorCheckPenalty = {true}
            callback = {callback}
            teml = {props.skills.Athletics}
          />
        </Grid>
      </Grid>
    </>
  )
}
