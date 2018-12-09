import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

import actions from '../store/actions'

const constructStyles = ({ bgColor }) => StyleSheet.create({
  buttonWrapper: {
    width: '28px',
    height: '28px',
    padding: '4px 0',
    background: '#eee',
    borderRadius: '4px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all .3s ease',
    ':hover': {
      filter: 'brightness(1.03)'
    }
  }
})

class AddKit extends Component {
  handleAdd () {
    
  }

  render () {
    const { size, color, bgColor, style } = this.props
    const styles = constructStyles({ bgColor })
    return (
      <div style={style} className={css(styles.buttonWrapper)} onClick={e => this.handleAdd()}>
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

const mapStateToProps = state => {
  return {
    data: state.quakka.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEntry: entry => {
      dispatch(actions.addEntry(entry))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddKit)
