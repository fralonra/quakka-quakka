import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EntryViewer extends Component {
  render () {
    const { data } = this.props
    return (
      <div className="entry">
        <h2 className="entry-name">{data.name}</h2>
        <p className="entry-definition">{data.definition}</p>
        <style jsx>{`
        .entry-name {
          margin: 10px 0;
        }
        .entry-definition {
          margin: 5px 0;
        }
      `}</style>
      </div>
    )
  }
}

EntryViewer.propTypes = {
  data: PropTypes.object
}

EntryViewer.defaultTypes = {
  data: null
}

export default EntryViewer
