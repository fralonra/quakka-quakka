import React, { Component } from 'react'

import Search from './Search'
import Router from 'next/router'

class SearchKit extends Component {
  handleSearch (val) {
    Router.push(`/entry?q=${val}`)
  }

  render () {
    const { data, ...attrs } = this.props
    return (
      <Search
        placeholder={`Search for ${data.length} words`}
        showSuggestions
        suggestions={data.map(d => d.name)}
        onSearch={v => this.handleSearch(v)}
        { ...attrs } />
    )
  }
}

export default SearchKit
