import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

import actions from '../store/actions'

const styles = StyleSheet.create({
  brand: {
    padding: '10px',
    color: '#eee',
    cursor: 'pointer'
  }
})

class Brand extends Component {
  render () {
    return (
      <div className={css(styles.brand)} onClick={e => this.props.setIndex(null)}>Quakka Quakka</div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIndex: index => {
      dispatch(actions.setIndex(index))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Brand)
