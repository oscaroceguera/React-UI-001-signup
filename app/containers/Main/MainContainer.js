import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { App } from './styles.css'
import { Modal } from 'components'

const MainContainer = React.createClass({
  getInitialState () {
    return { mounted: false }
  },
  componentDidMount () {
    this.setState({ mounted: true })
  },
  handleSubmit (e) {
    this.setState({ mounted: false })
    e.preventDefault()
  },
  render () {
    return (
      <div className={App}>
        <ReactCSSTransitionGroup
          transitionName='signup'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          { this.state.mounted && <Modal onSubmit={this.handleSubmit} /> }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

export default MainContainer
