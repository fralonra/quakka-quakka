import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SaveButton = props => (
  <div style={props.style} className="buttonWrapper" onClick={e => props.onSave()}>
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
  <div style={props.style} className="buttonWrapper" onClick={e => props.onCancel()}>
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
      <div className="entry">
        <div className="form">
          <input
            name="name"
            value={entry.name}
            onChange={e => this.handleEntryChange('name', e.target.value)} />
          <input
            name="definition"
            value={entry.definition}
            onChange={e => this.handleEntryChange('definition', e.target.value)} />
        </div>
        <div className="button-group">
          <SaveButton style={{
            marginRight: '10px'
          }} onSave={() => onSave(entry)} />
          <CancelButton onCancel={() => onCancel()} />
        </div>
        <style jsx>{`
        .button-group {
          display: flex;
        }
      `}</style>
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
