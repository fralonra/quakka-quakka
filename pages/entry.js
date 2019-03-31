import React, { Component, Fragment } from 'react'
import Router, { withRouter } from 'next/router'

import {
  getByKey,
  getNextKey,
  getPrevKey
} from '../store'
import Layout from '../layouts/Layout'
import { EntryViewer, EntryEditor } from '../components'

const EditButton = props => (
  <div style={props.style} className="button-wrapper" onClick={e => props.onEdit()}>
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
  <div style={props.style} className="button-wrapper" onClick={e => props.onPrev()}>
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
  <div style={props.style} className="button-wrapper" onClick={e => props.onNext()}>
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
      data: getByKey(props.router.query.q),
      state: stateMap.VIEW
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      data: getByKey(props.router.query.q),
    })
  }
  
  switchState (state) {
    this.setState({ state })
  }
  
  handleSave (entry) {
    this.switchState(stateMap.VIEW)
  }

  handlePrev () {
    Router.push(`/entry?q=${getPrevKey(this.props.router.query.q)}`)
  }
  
  handleNext () {
    Router.push(`/entry?q=${getNextKey(this.props.router.query.q)}`)
  }

  render () {
    const { data, state } = this.state
    return (
      <Layout>
        <div className="entry">
          {data === null ? (
            <div>Result not found</div>
          ) : (
            <Fragment>
              <div className="toolbar">
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
              <style jsx>{`
              .toolbar {
                display: flex;
                justify-content: flex-end;
              }
              `}</style>
            </Fragment>
          )}
        </div>
      </Layout>
    )
  }
}

export default withRouter(Entry)
