import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CleanButton from './CleanButton'
import SearchButton from './SearchButton'
import Suggestion from './Suggestion'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onInputChange (e) {
    if (!e.target) return
    this.setStateValue(e.target.value)
  }

  onInputClean () {
    this.setStateValue()
  }

  onInputKeyDown (e) {
    switch (e.keyCode) {
      case 13:
        return this.props.onSearch(this.state.value)
      default:
        return
    }
  }

  setStateValue (value = '') {
    this.setState({ value }, () => {
      if (this.props.searchImmediate) {
        this.props.onSearch(this.state.value)
      }
    })
  }

  render () {
    const {
      maxLength,
      placeholder,
      showSearchButton,
      showSuggestions,
      suggestions,
      onSearch,
      style
    } = this.props
    const { value } = this.state
    const inputProps = {
      value,
      maxLength,
      placeholder
    }
    return (
      <div style={style} className="wrapper">
        <div className="input-wrapper">
          <input
            className="input"
            {...inputProps}
            onChange={e => this.onInputChange(e)}
            onKeyDown={e => this.onInputKeyDown(e)} />
          {value && <CleanButton onClick={e => this.onInputClean()} />}
          {showSearchButton && <SearchButton onClick={e => onSearch(value)} />}
        </div>
        {showSuggestions && (
          <Suggestion
            suggestions={suggestions}
            value={value}
            onSelect={v => onSearch(v)} />
        )}
        <style jsx>{`
        .wrapper {
          position: relative;
        }
        .input-wrapper {
          position: relative;
          height: 28px;
          border-radius: 5px;
          outline: 0;
          overflow: hidden;
          zIndex: 99;
        }
        .input {
          width: 200px;
          padding: 5px 8px;
          border: none;
        }
      `}</style>
      </div>
    )
  }
}

Search.propTypes = {
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  showSearchButton: PropTypes.bool,
  showSuggestions: PropTypes.bool,
  searchImmediate: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  onSearch: PropTypes.func
}

Search.defaultProps = {
  maxLength: 20,
  placeholder: 'Search here',
  showSearchButton: true,
  showSuggestions: false,
  searchImmediate: false,
  suggestions: [],
  onSearch: v => {}
}

export default Search
