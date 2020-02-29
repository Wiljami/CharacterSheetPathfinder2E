import React from "react";
import Grid from "@material-ui/core/Grid";

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

export default SavingThrow