import React from "react";

export default function AbilityScoreMod(props) {
  let mod = props.mod
  if (mod > 0) {
    mod = '+' + mod
  }
  return (
    <>
      <p>{mod}</p>
    </>
  )
}
