import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getFunName } from './helpers'
export default class StorePicker extends Component {
  constructor () {
    super()
    this.goToStore = this.goToStore.bind(this)
  }

  goToStore (event) {
    event.preventDefault()
    console.log('You clicked me')
    const storeId = this.storeInput.value
    this.context.router.transitionTo(`/store/${storeId}`)
  }
  render () {
    return <div>
      <form className='store-selector'
        onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='Store Name'
          defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type='submit'>Visit Store</button>
      </form>
    </div>
  }
}
StorePicker.contextTypes = {
  router: React.PropTypes.object.isRequired
}
