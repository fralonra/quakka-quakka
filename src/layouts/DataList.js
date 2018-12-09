import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  dataList: {
    width: '200px',
    padding: '0',
    margin: '0',
    background: '#fff',
    textAlign: 'left',
    overflow: 'auto'
  },
  listEntry: {
    height: '28px',
    padding: '5px',
    listStyle: 'none',
    color: '#333',
    cursor: 'pointer',
    ':hover': {
      background: '#eee'
    }
  }
})

const Entry = props => (
  <li
    className={css(styles.listEntry)}
    onClick={e => props.onClick()}>{props.value}</li>
)

class DataList extends Component {
  render () {
    const { data, onSelect } = this.props
    return (
      <ul className={css(styles.dataList)}>
        {data.map((d, i) => (
          <Entry key={i} value={d.name} onClick={() => onSelect(i)} />
        ))}
      </ul>
    )
  }
}

DataList.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func
}

DataList.defaultTypes = {
  data: [],
  onSelect: v => {}
}

export default DataList
