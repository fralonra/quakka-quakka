import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const loaderKeyframes = {
  '0%, 70%, 100%': { transform: 'scale3D(1.0, 1.0, 1.0)' },
  '35%': { transform: 'scale3D(0.0, 0.0, 1.0)' }
}

const styles = StyleSheet.create({
  splash: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  },
  loader: {
    width: '54px',
    height: '54px'
  },
  loaderBox: {
    width: '33%',
    height: '33%',
    float: 'left',
    background: 'red',
    animationName: loaderKeyframes,
    animationDuration: '1.3s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    'nth-of-type(1)': {
      animationDelay: '1s'
    }
  }
})

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
    return (
      <div className={css(styles.splash)}>
        <div className={css(styles.loader)}>
          {Array(9).fill(0).map((a, i) => <div style={{
            animationDelay: animationDelay(i)
          }} className={css(styles.loaderBox)} key={i} />)}
        </div>
      </div>
    )
  }
}

export default Splash
