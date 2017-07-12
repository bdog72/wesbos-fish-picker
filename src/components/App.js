import React, { Component } from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
export default class App extends Component {
  constructor () {
    super()
    this.addFish = this.addFish.bind(this)
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish (fish) {
    const fishes = {...this.state.fishes}
    const timeStamp = Date.now()
    fishes[`fish-${timeStamp}`] = fish
    this.setState({ fishes })
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}
