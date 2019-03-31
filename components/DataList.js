import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Entry = props => (
  <Link href={`/entry?q=${props.value}`}>
    <li className={`list-entry${props.isCurrent ? ' current' : ''}`}>
      {}{props.value}{}
      <style jsx>{`
      .list-entry {
        height: 28px;
        padding: 5px;
        list-style: none;
        color: #333;
        cursor: pointer;
      }
      .list-entry.current {
        background: #2af;
        color: #fff;
      }
      .list-entry:hover {
        background: #eee;
      }
      .list-entry.current:hover {
        background: #3bf;
      }
    `}</style>
    </li>
  </Link>
)

class DataList extends Component {
  render () {
    const { current, data } = this.props
    return (
      <ul className="data-list">
        {data.map((d, i) => (
          <Entry key={i} value={d} isCurrent={current === d} />
        ))}
        <style jsx>{`
        .data-list {
          width: 200px;
          height: 100%;
          padding: 0;
          margin: 0;
          background: #fff;
          text-align: left;
          overflow: auto;
        }
      `}</style>
      </ul>
    )
  }
}

DataList.propTypes = {
  current: PropTypes.string,
  data: PropTypes.array
}

DataList.defaultTypes = {
  current: '',
  data: []
}

export default DataList
