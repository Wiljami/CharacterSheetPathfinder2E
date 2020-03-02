import React from "react";
import Major from './Major'
import Box from '@material-ui/core/Box'
import Input from '@material-ui/core/Input'

export default function LevelBox(props) {
  function onChange(event) {
    let number = Number(event.target.value)
    props.callback({level: number})
  }
  return (
    <div align="center">
      <Box>
        <Major>Level</Major>
        <Input
          value = {props.level}
          onChange = {onChange}
          inputProps={{
            min: 1,
            max: 20,
            type: 'number'
          }}
          style={{
            fontSize: '32px',
            textAlign: 'center'
          }}
        />
      </Box>
    </div>
  )
}
