import React, { Component } from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from './sample-fishes'
import Fish from './Fish'
// import base from '../base'
export default class App extends Component {
  constructor () {
    super()
    this.addFish = this.addFish.bind(this)
    this.updateFish = this.updateFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

    this.state = {
      fishes: {},
      order: {}
    }
  }

  // componentWillMount () {
  //   this.ref = base.syncState(`${this.props.params.storeId}fishes`
  //     , {
  //       context: this,
  //       state: 'fishes'
  //     }
  //   )
  // }
  //
  // componentWillUnmount () {
  //   base.removeBinding(this)
  // }

  // componentWillUpdate (nextProps, nextState) {
  //   localStorage.setItem(`order-${this.props.params.storeId}`)
  // }

  addFish (fish) {
    const fishes = {...this.state.fishes}
    const timeStamp = Date.now()
    fishes[`fish-${timeStamp}`] = fish
    this.setState({ fishes })
  }

  updateFish (key, updatedFish) {
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({ fishes })
  }

  // I can name sampleFishes anything

  loadSamples () {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder (key) {
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='list-of-fishes'>
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />)
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish} />
      </div>
    )
  }
}
