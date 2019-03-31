import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'

import '../static/css/index.css'
import { getAllKeys } from '../store'
import {
  ErrorBoundary,
  Header
} from '../layouts'
import {
  Splash,
  DataList
} from '../components'

class Layout extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    this.setState({
      loading: false
    })
  }

  render () {
    const { children, router } = this.props
    const { loading } = this.state
    return (
      <ErrorBoundary>
        <Head>
          <title>Quakka Quakka</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="app">
          <Splash visible={loading} />
          <Header />
          <div className="main">
            <div className="content">
              {children}
            </div>
            <DataList data={getAllKeys()} current={router.query.q} />
          </div>
          <style jsx>{ `
          .app {
            display: flex;
            flex-flow: column;
            height: 100vh;
            overflow: hidden;
            padding: 0;
          }
          .main {
            display: flex;
            flex: 1;
          }
          .content {
            width: 50%;
            padding: 10px;
            margin: 0 auto;
          }
          @media (max-width: 960px) {
            .content {
              width: 60%;
            }
          }
          @media (max-width: 640px) {
            .content {
              width: 90%;
            }
          }
        `}</style>
        </div>
      </ErrorBoundary>
    )
  }
}

export default withRouter(Layout)
