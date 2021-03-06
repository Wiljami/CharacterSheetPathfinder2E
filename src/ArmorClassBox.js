import React from "react";
import Grid from "@material-ui/core/Grid";
import Primary from "./Primary";
import Major from "./Major";
import MinorMod from "./MinorMod";
import TEML from "./TEML";

export default function ArmorClassBox(props) {
  function callback(change) {
    props.callback({armorClass : {teml : change}})
  }

  let proficiency = -2

  if (props.armorClass.teml >= 0) {
    proficiency = props.armorClass.teml + props.level
  }

  let ac = 10 + props.abilityScoreModifiers.Dexterity + proficiency
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>Armor Class</h1>
        </Grid>
        <Grid item xs={4}>
          <div align='center'>
            <Major>{ac}</Major>
          </div>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <MinorMod name='DC Base' value='10'/>
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='DEX' value={props.abilityScoreModifiers.Dexterity}/>
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='CAP' value='2'/>
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='PROF' value={proficiency}/>
            </Grid>
            <Grid item xs={2}>
              <TEML
                callback={callback}
                value={props.armorClass.teml}
              />
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='ITEM' value='-1'/>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Major>Shield</Major>
            </Grid>
            <Grid item xs={2}>
              <Primary>++</Primary>
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='Hardness' value='0'/>
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='MAX HP' value='0'/>
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='BT' value='0'/>
            </Grid>
            <Grid item xs={2}>
              <MinorMod name='Current HP' value='0'/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
