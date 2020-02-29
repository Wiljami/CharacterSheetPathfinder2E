import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
class SavingThrowBox extends React.Component {
  render () {
    return (
      <div align="center">
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
            <TextField label="Notes" fullWidth margin="normal"/>
          </Grid>
        </Grid>
      </div>
    )
  }
}


class SavingThrow extends React.Component {
  render() {
    let savingThrow = this.props.mod
    return (
      <div align="center">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {this.props.name}
          </Grid>
          <Grid item xs={12}>
            {savingThrow}
          </Grid>
          <Grid item xs={6}>
            {this.props.modName} : {this.props.mod}
          </Grid>
          <Grid item xs={6}>
            PROF : ???
          </Grid>
          <Grid item xs={6}>
            ITEM : ???
          </Grid>
          <Grid item xs={6}>
            TEML : ???
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SavingThrowBox
