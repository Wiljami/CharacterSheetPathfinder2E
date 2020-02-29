import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ArmorClassBox(props) {
  const ac = 10 + props.abilityScoreModifiers.Dexterity
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>Armor Class</h1>
        </Grid>
        <Grid item xs={4}>
          {ac}
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  DC Base
                </Grid>
                <Grid item xs={12}>
                  10
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  DEX
                </Grid>
                <Grid item xs={12}>
                  {props.abilityScoreModifiers.Dexterity}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              CAP
            </Grid>
            <Grid item xs={2}>
              PROF
            </Grid>
            <Grid item xs={2}>
              TEML
            </Grid>
            <Grid item xs={2}>
              ITEM
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              Shield
            </Grid>
            <Grid item xs={2}>
              ++
            </Grid>
            <Grid item xs={2}>
              Hardness
            </Grid>
            <Grid item xs={2}>
              MAX HP
            </Grid>
            <Grid item xs={2}>
              BT
            </Grid>
            <Grid item xs={2}>
              CURRENT HP
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
