import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SavingThrow from "./SavingThrow";
class SavingThrowBox extends React.Component {
  render () {
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h1>Saving Throws</h1>
          </Grid>
          <Grid item xs={4}>
            <SavingThrow
              name = 'Fortitude'
              mod = {this.props.abilityScoreModifiers.Constitution}
              modName = 'CON'
            />
          </Grid>
          <Grid item xs={4}>
            <SavingThrow
              name = 'Reflex'
              mod = {this.props.abilityScoreModifiers.Dexterity}
              modName = 'DEX'
            />
          </Grid>
          <Grid item xs={4}>
            <SavingThrow
              name = 'Will'
              mod = {this.props.abilityScoreModifiers.Wisdom}
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
}

export default SavingThrowBox
