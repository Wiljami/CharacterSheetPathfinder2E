import React from "react";
import Grid from "@material-ui/core/Grid";
import SkillEntry from "./SkillEntry";

export default function SkillBox(props)  {
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
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Arcana'
            abilityMod = {props.abilityScoreModifiers.Intelligence}
            abilityName = 'INT'
            armorCheckPenalty = {false}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Athletics'
            abilityMod = {props.abilityScoreModifiers.Strength}
            abilityName = 'STR'
            armorCheckPenalty = {true}
          />
        </Grid>
      </Grid>
    </>
  )
}
