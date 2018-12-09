import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

import { Entry, Intro } from '.'

const styles = StyleSheet.create({
  content: {
    width: '50%',
    padding: '10px',
    margin: '0 auto',
    '@media (max-width: 960px)': {
      width: '60%'
    },
    '@media (max-width: 640px)': {
      width: '90%'
    }
  }
})

class Content extends Component {
  render () {
    const { entry, sum } = this.props
    return (
      <div className={css(styles.content)}>
        {entry ? (
          Object.keys(entry).length ? (
            <Entry data={entry} sum={sum} />
          ) : (
            <Intro />
          )
        ) : (
          <p>Result not found</p>
        )}
      </div>
    )
  }
}

Content.propTypes = {
  entry: PropTypes.object,
  sum: PropTypes.number
}

Content.defaultProps = {
  entry: null,
  sum: 0
}

export default Content
