import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

import actions from '../store/actions'
import { Content, DataList, Header, Splash } from '.'

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
    padding: 0
  },
  main: {
    display: 'flex',
    flex: '1'
  }
})

class Main extends Component {
  componentDidMount () {
    this.initData()
  }

  initData () {
    fetch('./data/quakka.json')
      .then(res => res.json())
      .then(res => {
        this.props.setData(res)
        this.props.load(false)
      })
      .catch(e => console.log(e))
  }

  render () {
    const { isLoading, data, index, setIndex } = this.props
    const entry = data[index] || {}
    return isLoading ? (
      <Splash />
    ) : (
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.main)}>
          <Content entry={entry} sum={data.length} />
          <DataList data={data} onSelect={i => setIndex(i)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.global.isLoading,
    data: state.quakka.data,
    index: state.quakka.index
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: state => {
      dispatch(actions.load(state))
    },
    setData: data => {
      dispatch(actions.setData(data))
    },
    setIndex: index => {
      dispatch(actions.setIndex(index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
