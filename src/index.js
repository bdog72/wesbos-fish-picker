import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import ReactRouter from './components/ReactRouter'
// import App from './components/App'
import './styles/style.scss'
// import './styles/screen.scss'
// import './styles/css/style.css'
const root = document.getElementById('root')

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}

render(<ReactRouter />)

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     const NextApp = require('./components/App').default
//     render(<NextApp />)
//   })
// }
if (module.hot) {
  module.hot.accept('./components/ReactRouter', () => {
    const NextApp = require('./components/ReactRouter').default
    render(<NextApp />)
  })
}
