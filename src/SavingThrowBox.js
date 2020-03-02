import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SavingThrow from "./SavingThrow";
export default function SavingThrowBox (props) {
  function callback(change) {
    props.callback({savingThrows : Object.assign(props.savingThrows, change)})
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>Saving Throws</h1>
        </Grid>
        <Grid item xs={4}>
          <SavingThrow
            name = 'Fortitude'
            modName = 'CON'
            teml = {props.savingThrows.Fortitude}
            mod = {props.abilityScoreModifiers.Constitution}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={4}>
          <SavingThrow
            name = 'Reflex'
            modName = 'DEX'
            teml = {props.savingThrows.Reflex}
            mod = {props.abilityScoreModifiers.Dexterity}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={4}>
          <SavingThrow
            name = 'Will'
            modName = 'WIS'
            teml = {props.savingThrows.Will}
            mod = {props.abilityScoreModifiers.Wisdom}
            level = {props.level}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Notes"
            fullWidth margin="normal"
            multiline
            rowsMax="4"
          />
        </Grid>
      </Grid>
    </>
  )
}
