import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

const SearchIcon = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.size}
    height={props.size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={props.color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <circle cx='11' cy='11' r='8' />
    <line x1='21' y1='21' x2='16.65' y2='16.65' />
  </svg>
)

const constructStyles = ({ bgColor }) => StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    width: '28px',
    height: '28px',
    padding: '4px 0',
    background: bgColor,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all .3s ease',
    ':hover': {
      filter: 'brightness(1.03)'
    }
  }
})

class SearchButton extends Component {
  render () {
    const { color, bgColor, onClick } = this.props
    const styles = constructStyles({ bgColor })
    return (
      <div className={css(styles.buttonWrapper)} onClick={e => onClick(e)}>
        <SearchIcon size={20} color={color} />
      </div>
    )
  }
}

SearchButton.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func
}

SearchButton.defaultProps = {
  color: '#999',
  bgColor: '#eee',
  onClick: e => {}
}

export default SearchButton
