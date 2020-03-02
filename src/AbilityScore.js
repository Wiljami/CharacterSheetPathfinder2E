import React from "react";
import Input from "@material-ui/core/Input";

export default function AbilityScore(props) {
  function onChange(event) {
    let number = Number(event.target.value)
    let change = {[props.ability] : number}
    props.callback(change)
  }

  return <>
    <Input
      value = {props.score}
      onChange = {onChange}
      inputProps={{
        min: 0,
        max: 100,
        type: 'number',
        style: {
          textAlign: 'center'
        }}}
    />
  </>
}
