import React, { Component } from 'react'

import { getAll } from '../store'
import {
  // AddKit,
  Brand,
  SearchKit,
  // DownloadKit
} from '../components'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <Brand />
        <SearchKit data={getAll()} />
        <div className="toolbar">
          {/* <AddKit style={{
            marginRight: '10px'
          }} /> */}
          {/* <DownloadKit style={{
            marginRight: '10px'
          }} /> */}
        </div>
        <style jsx>{`
        .header {
          display: flex;
          flex: 0 0 48px;
          justify-content: space-between;
          align-items: center;
          height: 48px;
          padding: 5px 0;
          background: #333;
          color: #eee;
          text-align: center;
          z-index: 999;
        }
        .toolbar {
          display: flex;
        }
      `}</style>
      </div>
    )
  }
}

export default Header
