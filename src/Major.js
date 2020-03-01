import React from "react"
import PropTypes from 'prop-types'

export default function Major(props) {
  const { children } = props
  return (
    <>
      <div style={{fontSize:'18px'}}>{children}</div>
    </>
  )
}

Major.propTypes = {
  children: PropTypes.node
}
