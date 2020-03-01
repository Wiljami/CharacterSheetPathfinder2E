import React from "react"
import PropTypes from 'prop-types'

export default function Primary(props) {
  const { children } = props
  return (
    <>
      <div style={{fontSize:'12px'}}>{children}</div>
    </>
  )
}

Primary.propTypes = {
  children: PropTypes.node
}
