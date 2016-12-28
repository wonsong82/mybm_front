require('./App.scss')

import React, { Component, PropTypes } from 'react'
import Header from '../components/app/Header'
import Page from '../transitions/app/Page'


class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    const { page } = this.props

    return (
      <div className="App">
        <Header />
        <Page >{ page }</Page>
      </div>
    )
  }


}


export default App