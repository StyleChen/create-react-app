import React, { Component } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
  }

  render () {
    return (
      <div>
        hello Login page!
      </div>
    )
  }
}

export default connect()(Login)