import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Entry = props => (
  <li
    className="suggestion-entry"
    onClick={e => props.onClick(props.value)}>
    {props.value}
    <style jsx>{`
    .suggestion-entry {
      padding: 5px;
      list-style: none;
      color: #333;
      cursor: pointer;
    }
    .suggestion-entry:hover {
      background: #eee;
    }
  `}</style>
  </li>
)

class Suggestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: true,
      filter: []
    }
  }

  componentDidMount () {
    document.addEventListener('click', e => this.onDocClick(e))
  }

  componentWillUnmount () {
    document.removeEventListener('click', e => this.onDocClick(e))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      this.filter(this.props.suggestions, this.props.value)
    }
  }

  onDocClick (e) {
    this.setState({
      visible: false
    })
  }

  onEntryClick (val) {
    this.props.onSelect(val)
    this.setState({
      visible: false
    })
  }

  filter (list, value) {
    let filter = []
    if (value) {
      for (let i = 0; i < list.length; ++i) {
        if (list[i].indexOf(value) >= 0) {
          filter.push(list[i])
          if (filter.length >= this.props.limit) {
            break
          }
        }
      }
    }
    this.setState({
      visible: true,
      filter
    })
  }

  render () {
    const { visible, filter } = this.state
    return (visible && filter.length) ? (
      <ul className="suggestion-wrapper">
        {filter.map((s, i) => (
          <Entry key={i} value={s} onClick={e => this.onEntryClick(s)} />
        ))}
        <style jsx>{`
        .suggestion-wrapper {
          position: absolute;
          top: 18px;
          left: 0;
          right: 0;
          padding: 0;
          padding-top: 10px;
          margin: 0;
          background: #fff;
          text-align: left;
        }
      `}</style>
      </ul>
    ) : null
  }
}

Suggestion.propTypes = {
  limit: PropTypes.number,
  value: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func
}

Suggestion.defaultProps = {
  limit: 5,
  value: '',
  suggestions: [],
  onSelect: v => {}
}

export default Suggestion
