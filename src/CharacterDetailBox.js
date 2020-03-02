import React from "react";
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

export function CharacterDetailBox(props) {
  function onBlur(event) {
    props.callback({details : Object.assign(props.details, {[event.target.id] : event.target.value})})
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
          />
          <TextField
            label='Player name'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.playerName}
            multiline
            id='playerName'
          />
          <TextField
            label='Class'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.class}
            multiline
            id='class'
          />
          <TextField
            label='Experience points'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.experience}
            multiline
            id='experience'
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
          />
          <TextField
            label='Background'
            fullWidth margin="normal"
            onBlur={onBlur}
            defaultValue={props.details.background}
            multiline
            id='background'
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
          />
        </Grid>
      </Grid>
    </>
  )
}
