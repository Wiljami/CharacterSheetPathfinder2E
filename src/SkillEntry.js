import React from "react";
import Grid from "@material-ui/core/Grid";

class SkillEntry extends React.Component {
  render() {
    const total = this.props.abilityMod

    let armorCheckPenalty = ''

    if (this.props.armorCheckPenalty) {
      armorCheckPenalty = (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            ARMOR
          </Grid>
          <Grid item xs={12}>
            0
          </Grid>
        </Grid>
      )
    }

    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            {this.props.name}
          </Grid>
          <Grid item xs={2}>
            {total}
          </Grid>
          <Grid item xs={1}>
            =
          </Grid>
          <Grid item xs={1}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                {this.props.abilityName}
              </Grid>
              <Grid item xs={12}>
                {this.props.abilityMod}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                PROF
              </Grid>
              <Grid item xs={12}>
                -2
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            TEML
          </Grid>
          <Grid item xs={1}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                ITEM
              </Grid>
              <Grid item xs={12}>
                -1
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            {armorCheckPenalty}
          </Grid>
        </Grid>
      </>
    )
  }
}

export default SkillEntry
