import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import {
  AddKit,
  Brand,
  SearchKit,
  DownloadKit
} from '.'

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: '0 0 48px',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '48px',
    padding: '5px 0',
    background: '#333',
    color: '#eee',
    textAlign: 'center',
    zIndex: 999
  },
  toolbar: {
    display: 'flex'
  }
})

class Header extends Component {
  render () {
    return (
      <div className={css(styles.header)}>
        <Brand />
        <SearchKit />
        <div className={css(styles.toolbar)}>
          {/* <AddKit style={{
            marginRight: '10px'
          }} /> */}
          <DownloadKit style={{
            marginRight: '10px'
          }} />
        </div>
      </div>
    )
  }
}

export default Header
