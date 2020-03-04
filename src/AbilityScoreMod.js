import React from "react";
import Major from './Major'

export default function AbilityScoreMod(props) {
  let mod = props.mod
  if (mod > 0) {
    mod = '+' + mod
  }
  return (
    <>
      <Major>{mod}</Major>
    </>
  )
}
