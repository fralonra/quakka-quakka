import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  entry: {
  },
  entryName: {
    margin: '10px 0'
  },
  entryDefinition: {
    margin: '5px 0'
  }
})

class EntryViewer extends Component {
  render () {
    const { data } = this.props
    return (
      <div className={css(styles.entry)}>
        <h2 className={css(styles.entryName)}>{data.name}</h2>
        <p className={css(styles.entryDefinition)}>{data.definition}</p>
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
