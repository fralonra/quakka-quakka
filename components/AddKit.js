import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddKit extends Component {
  handleAdd () {
    
  }

  render () {
    const { size, color, style } = this.props
    return (
      <div style={style} className="button-wrapper" onClick={e => this.handleAdd()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    )
  }
}

AddKit.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string
}

AddKit.defaultProps = {
  size: 20,
  color: '#999',
  bgColor: '#eee'
}

export default AddKit
