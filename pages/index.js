import React, { Component } from 'react'

import Example from '../components/Example'

export default class Index extends Component {
  /* eslint-disable no-unused-vars */
  static async getInitialProps ({ req, query }) {
    return query
  }

  render () {
    return (
      <Example {...this.props} />
    )
  }
}
