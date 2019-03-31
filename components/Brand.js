import React, { Component } from 'react'
import Link from 'next/link'

class Brand extends Component {
  render () {
    return (
      <Link href="/">
        <div className="brand">
          {'Quakka Quakka'}
          <style jsx>{`
          .brand {
            padding: 10px;
            color: #eee;
            cursor: pointer;
          }
        `}</style>
        </div>
      </Link>
    )
  }
}

export default Brand