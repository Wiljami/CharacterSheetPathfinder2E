import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SavingThrow from "./SavingThrow";
export default function SavingThrowBox (props) {
  function callback(change) {
    Object.assign(props.savingThrows, change)
    let result = {savingThrows : Object.assign(props.savingThrows, change)}
    props.callback(result)
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
            mod = {props.abilityScoreModifiers.Constitution}
            modName = 'CON'
            teml = {props.savingThrows.Fortitude}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={4}>
          <SavingThrow
            name = 'Reflex'
            mod = {props.abilityScoreModifiers.Dexterity}
            modName = 'DEX'
            teml = {props.savingThrows.Reflex}
            callback = {callback}
          />
        </Grid>
        <Grid item xs={4}>
          <SavingThrow
            name = 'Will'
            mod = {props.abilityScoreModifiers.Wisdom}
            modName = 'WIS'
            teml = {props.savingThrows.Will}
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
