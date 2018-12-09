import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

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

const el = document.createElement('a')

class DownloadKit extends Component {
  handleDownload () {
    const data = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.props.data, null, 2))}`
    el.setAttribute('href', data)
    el.setAttribute('download', this.props.filename)
    el.click()
  }

  render () {
    const { size, color, bgColor, style } = this.props
    const styles = constructStyles({ bgColor })
    return (
      <div style={style} className={css(styles.buttonWrapper)} onClick={e => this.handleDownload()}>
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
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    )
  }
}

DownloadKit.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  filename: PropTypes.string
}

DownloadKit.defaultProps = {
  size: 20,
  color: '#999',
  bgColor: '#eee',
  filename: 'quakka.json'
}

const mapStateToProps = state => {
  return {
    data: state.quakka.data
  }
}

export default connect(
  mapStateToProps
)(DownloadKit)
