import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SavingThrow from "./SavingThrow";
export default function SavingThrowBox (props) {
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
            />
          </Grid>
          <Grid item xs={4}>
            <SavingThrow
              name = 'Reflex'
              mod = {props.abilityScoreModifiers.Dexterity}
              modName = 'DEX'
            />
          </Grid>
          <Grid item xs={4}>
            <SavingThrow
              name = 'Will'
              mod = {props.abilityScoreModifiers.Wisdom}
              modName = 'WIS'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Notes"
              fullWidth margin="normal"
              multiline
              rowsMax="4"/>
          </Grid>
        </Grid>
      </>
    )
  }
