import React, { Component } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
  }

  render () {
    return (
      <div>
        hello world!
      </div>
    )
  }
}

export default connect()(Home)