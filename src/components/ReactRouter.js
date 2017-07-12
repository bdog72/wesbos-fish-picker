import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
// import StorePicker from './StorePicker'

export default class ReactRouter extends Component {
  render () {
    return <div>
      <ReactRouter1 />
    </div>
  }
}

const ReactRouter1 = () => {
  return (
    // <BrowserRouter>
    <Router>
      <div>
        {/* <Route exactly path='/' component={App} /> */}
        {/* <Route exactly pattern='/' component={StorePicker} />
        <Route exactly pattern='/store/:storeId' component={App} /> */}
        <Route exact path='/' component={App} />
        {/* <Route path='/store/:storeId' component={App} /> */}

      </div>
    </Router>
    // </BrowserRouter>

  )
}
