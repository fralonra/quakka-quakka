import React, { Component } from 'react'
import PropTypes from 'prop-types'

function animationDelay (idx) {
  switch (idx) {
    case 3:
    case 7:
      return '.1s'
    case 0:
    case 4:
    case 8:
      return '.2s'
    case 1:
    case 5:
      return '.3s'
    case 2:
      return '.4s'
    default:
      return '0s'
  }
}

class Splash extends Component {
  render () {
    const { visible } = this.props
    return (
      <div className="splash">
        <div className="loader">
          {Array(9).fill(0).map((a, i) => <div style={{
            animationDelay: animationDelay(i)
          }} className="loader-box" key={i} />)}
        </div>
        <style jsx>{`
        @keyframes loader {
          0%, 70%, 100% {
            transform: scale3D(1.0, 1.0, 1.0)
          }
          35% {
            transform: scale3D(0.0, 0.0, 1.0)
          }
        }
        .splash {
          display: ${visible ? 'flex' : 'none'};
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: #fff;
          z-index: 9999;
        }
        .loader {
          width: 54px;
          height: 54px;
        }
        .loader-box {
          width: 33%;
          height: 33%;
          float: left;
          background: red;
          animation: loader 1.3s infinite ease-in-out;
        }
        .loader-box:nth-of-type(1) {
          animation-delay: 1s;
        }
      `}</style>
      </div>
    )
  }
}

Splash.propTypes = {
  visible: PropTypes.bool
}

Splash.defaultProps = {
  visible: false
}

export default Splash
