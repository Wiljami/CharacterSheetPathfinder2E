import React from "react";
import TextField from '@material-ui/core/TextField'

export function CharacterDetailBox(props) {
  function onChange(event) {
    props.callback({details : Object.assign(props.details, {[event.target.id] : event.target.value})})
  }

  return (
    <>
      <TextField
        label='Name'
        fullWidth margin="normal"
        onBlur={onChange}
        defaultValue={props.details.Name}
        id='Name'
      />
    </>
  )
}