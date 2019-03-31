import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DownloadKit extends Component {
  constructor (props) {
    super(props)

    this.el = null
  }

  componentDidMount () {
    this.el = document.createElement('a')
  }

  handleDownload () {
    const data = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.props.data, null, 2))}`
    this.el.setAttribute('href', data)
    this.el.setAttribute('download', this.props.filename)
    this.el.click()
  }

  render () {
    const { size, color, style } = this.props
    return (
      <div style={style} className="button-wrapper" onClick={e => this.handleDownload()}>
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

export default DownloadKit
