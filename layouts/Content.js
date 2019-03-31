import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Content extends Component {
  render () {
    const { entry, sum } = this.props
    return (
      <div className="content">
        {entry ? (
          Object.keys(entry).length ? (
            // <Entry data={entry} sum={sum} />
            <div>entry</div>
          ) : (
            <div>INTRO</div>
          )
        ) : (
          <p>Result not found</p>
        )}
        <style jsx>{`
        .content: {
          width: 50%;
          padding: 10px;
          margin: 0 auto;
        }
        @media (max-width: 960px): {
          .content {
            width: 60%;
          }
        }
        @media (max-width: 640px): {
          .content {
            width: 90%;
          }
        }
      `}</style>
      </div>
    )
  }
}

Content.propTypes = {
  entry: PropTypes.object,
  sum: PropTypes.number
}

Content.defaultProps = {
  entry: null,
  sum: 0
}

export default Content
