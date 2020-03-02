import React from "react";
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

export function CharacterDetailBox(props) {
  function onBlur(event) {
    props.callback({details : Object.assign(props.details, {[event.target.id] : event.target.value})})
  }

  const style = {
    margin: 0,
    padding: 0
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            label='Name'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.name}
            multiline
            id='name'
            style={style}
          />
          <TextField
            label='Player name'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.playerName}
            multiline
            id='playerName'
            style={style}
          />
          <TextField
            label='Class'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.class}
            multiline
            id='class'
            style={style}
          />
          <TextField
            label='Experience points'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.experience}
            multiline
            id='experience'
            style={style}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Ancestry and Heritage'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.ancestry}
            multiline
            id='ancestry'
            style={style}
          />
          <TextField
            label='Background'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.background}
            multiline
            id='background'
            style={style}
          />
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <TextField
                label='Size'
                fullWidth margin="normal"
                onBlur={onBlur}
                defaultValue={props.details.size}
                multiline
                id='size'
                style={style}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label='Alignment'
                fullWidth margin="normal"
                onBlur={onBlur}
                defaultValue={props.details.alignment}
                multiline
                id='alignment'
                style={style}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                label='Traits'
                fullWidth margin="normal"
                onBlur={onBlur}
                defaultValue={props.details.traits}
                multiline
                id='traits'
                style={style}
              />
            </Grid>
          </Grid>
          <TextField
            label='Deity'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.deity}
            multiline
            id='deity'
            style={style}
          />
        </Grid>
      </Grid>
    </>
  )
}
