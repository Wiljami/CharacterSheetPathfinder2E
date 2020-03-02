import React from "react";
import Grid from "@material-ui/core/Grid";
import MinorMod from "./MinorMod";
import Major from "./Major";
import TEML from "./TEML";

export default function SkillEntry(props) {
  function callback(value) {
    props.callback({[props.name] : value})
  }

  const total = props.abilityMod + props.teml

  let armorCheckPenalty = ''

  if (props.armorCheckPenalty) {
    armorCheckPenalty = (
      <MinorMod name='ARMOR' value='-2'/>
    )
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Major>{props.name}</Major>
        </Grid>
        <Grid item xs={1}>
          <Major>{total}</Major>
        </Grid>
        <Grid item xs={1}>
          <Major>=</Major>
        </Grid>
        <Grid item xs={1}>
          <MinorMod name={props.abilityName} value={props.abilityMod}/>
        </Grid>
        <Grid item xs={1}>
          <MinorMod name='PROF' value='2'/>
        </Grid>
        <Grid item xs={}>
          <TEML
            callback={callback}
            value={props.teml}
          />
        </Grid>
        <Grid item xs={1}>
          <MinorMod name='ITEM' value='2'/>
        </Grid>
        <Grid item xs={1}>
          {armorCheckPenalty}
        </Grid>
      </Grid>
    </>
  )
}
