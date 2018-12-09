import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  entry: {
  },
  form: {

  },
  buttonGroup: {
    display: 'flex'
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

const SaveButton = props => (
  <div style={props.style} className={css(styles.buttonWrapper)} onClick={e => props.onSave()}>
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
)

const CancelButton = props => (
  <div style={props.style} className={css(styles.buttonWrapper)} onClick={e => props.onCancel()}>
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </div>
)

class EntryEditor extends Component {
  constructor (props) {
    super(props)

    const { data } = props

    this.state = {
      entry: {
        etymology: data.etymology || '',
        name: data.name || '',
        definition: data.definition || '',
        note: data.note || ''
      }
    }
  }

  handleEntryChange (key, value) {
    this.setState({
      [key]: value
    })
  }

  handleSave () {
    this.props.onSave()
  }

  render () {
    const { onSave, onCancel } = this.props
    const { entry } = this.state
    return (
      <div className={css(styles.entry)}>
        <div className={css(styles.form)}>
          <input
            name="name"
            value={entry.name}
            onChange={e => this.handleEntryChange('name', e.target.value)} />
          <input
            name="definition"
            value={entry.definition}
            onChange={e => this.handleEntryChange('definition', e.target.value)} />
        </div>
        <div className={css(styles.buttonGroup)}>
          <SaveButton style={{
            marginRight: '10px'
          }} onSave={() => onSave(entry)} />
          <CancelButton onCancel={() => onCancel()} />
        </div>
      </div>
    )
  }
}

EntryEditor.propTypes = {
  data: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
}

EntryEditor.defaultTypes = {
  data: null,
  onSave: v => {},
  onCancel: () => {}
}

export default EntryEditor
