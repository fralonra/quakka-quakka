import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../store/actions'
import { Search } from '../components'

class SearchKit extends Component {
  handleSearch (val) {
    const index = val ? this.props.data.findIndex(d => d.name.indexOf(val) >= 0) : null
    this.props.setIndex(index)
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

const mapStateToProps = state => {
  return {
    data: state.quakka.data
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
  mapStateToProps,
  mapDispatchToProps
)(SearchKit)
