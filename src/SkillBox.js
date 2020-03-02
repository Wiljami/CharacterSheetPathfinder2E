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
        <Grid item xs={12}>
          <SkillEntry
            name = 'Crafting'
            abilityName = 'INT'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Intelligence}
            teml = {props.skills.Crafting}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Deception'
            abilityName = 'CHA'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Charisma}
            teml = {props.skills.Deception}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Diplomacy'
            abilityName = 'CHA'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Charisma}
            teml = {props.skills.Diplomacy}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Intimidation'
            abilityName = 'CHA'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Charisma}
            teml = {props.skills.Intimidation}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Medicine'
            abilityName = 'WIS'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Wisdom}
            teml = {props.skills.Medicine}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Nature'
            abilityName = 'WIS'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Wisdom}
            teml = {props.skills.Nature}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Occultism'
            abilityName = 'INT'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Intelligence}
            teml = {props.skills.Occultism}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Performance'
            abilityName = 'CHA'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Charisma}
            teml = {props.skills.Performance}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Religion'
            abilityName = 'WIS'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Wisdom}
            teml = {props.skills.Religion}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Society'
            abilityName = 'INT'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Intelligence}
            teml = {props.skills.Society}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Stealth'
            abilityName = 'DEX'
            armorCheckPenalty = {true}
            abilityMod = {props.abilityScoreModifiers.Dexterity}
            teml = {props.skills.Stealth}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Survival'
            abilityName = 'WIS'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Wisdom}
            teml = {props.skills.Survival}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <SkillEntry
            name = 'Thievery'
            abilityName = 'DEX'
            armorCheckPenalty = {false}
            abilityMod = {props.abilityScoreModifiers.Dexterity}
            teml = {props.skills.Thievery}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
      </Grid>
    </>
  )
}
