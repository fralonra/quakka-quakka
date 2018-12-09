import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

import actions from '../store/actions'
import { EntryViewer, EntryEditor } from '.'

const styles = StyleSheet.create({
  entry: {
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonWrapper: {
    width: '28px',
    height: '28px',
    padding: '4px 0',
    background: '#eee',
    borderRadius: '4px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all .3s ease',
    ':hover': {
      filter: 'brightness(1.03)'
    }
  }
})

const EditButton = props => (
  <div style={props.style} className={css(styles.buttonWrapper)} onClick={e => props.onEdit()}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
    </svg>
  </div>
)

const PrevButton = props => (
  <div style={props.style} className={css(styles.buttonWrapper)} onClick={e => props.onPrev()}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  </div>
)

const NextButton = props => (
  <div style={props.style} className={css(styles.buttonWrapper)} onClick={e => props.onNext()}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </div>
)

const stateMap = {
  VIEW: 'view',
  EDIT: 'edit'
}

class Entry extends Component {
  constructor (props) {
    super(props)

    this.state = {
      state: stateMap.VIEW
    }
  }

  componentDidMount () {
    const { data } = this.props
    if (data.name === '' || data.definition === '') {
      this.switchState(stateMap.EDIT)
    }
  }
  
  switchState (state) {
    this.setState({ state })
  }
  
  handleSave (entry) {
    this.switchState(stateMap.VIEW)
  }

  handlePrev () {
    const { sum, index, setIndex } = this.props
    const prev = index <= 0 ? sum - 1 : index - 1
    setIndex(prev)
  }

  handleNext () {
    const { sum, index, setIndex } = this.props
    const next = index >= sum - 1 ? 0 : index + 1
    setIndex(next)
  }

  render () {
    const { data } = this.props
    const { state } = this.state
    return (
      <div className={css(styles.entry)}>
        <div className={css(styles.toolbar)}>
          {state === stateMap.VIEW && (
            <Fragment>
              {/* <EditButton style={{ marginRight: '5px' }} onEdit={() => this.switchState(stateMap.EDIT)} /> */}
              <PrevButton style={{ marginRight: '5px' }} onPrev={() => this.handlePrev()} />
              <NextButton onNext={() => this.handleNext()} />
            </Fragment>
          )}
        </div>
        {state === stateMap.VIEW && (
          <EntryViewer data={data} />
        )}
        {state === stateMap.EDIT && (
          <EntryEditor
            data={data}
            onSave={val => this.handleSave(val)}
            onCancel={() => this.switchState(stateMap.VIEW)} />
        )}
      </div>
    )
  }
}

Entry.propTypes = {
  data: PropTypes.object,
  sum: PropTypes.number
}

Entry.defaultTypes = {
  data: null,
  sum: 0
}

const mapStateToProps = state => {
  return {
    index: state.quakka.index
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
)(Entry)
