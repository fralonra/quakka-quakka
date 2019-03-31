import React, { Component } from 'react'
import PropTypes from 'prop-types'

const CleanIcon = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox='0 0 24 24'
    fill='none'
    stroke={props.color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
)

class CleanButton extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div className="icon-wrapper" onClick={e => onClick(e)}>
        <CleanIcon width={12} height={12} color='#ccc' />
        <style jsx>{`
        .icon-wrapper {
          position: absolute;
          top: 5px;
          right: 31px;
          background: #fff;
          cursor: pointer;
        }
      `}</style>
      </div>
    )
  }
}

CleanButton.propTypes = {
  onClick: PropTypes.func
}

CleanButton.defaultProps = {
  onClick: e => {}
}

export default CleanButton
