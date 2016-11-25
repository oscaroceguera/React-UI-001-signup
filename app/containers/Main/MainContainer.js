import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { App } from './styles.css'
import { Modal } from 'components'
import * as modalActionCreators from 'redux/modules/modal'

const MainContainer = React.createClass({
  propTypes: {
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    mounted: PropTypes.bool.isRequired
  },
  componentDidMount () {
    this.props.openModal()
  },
  handleSubmit (e) {
    this.props.closeModal()
    e.preventDefault()
  },
  showModal (e) {
    this.props.openModal()
    e.stopPropagation()
  },
  render () {
    const { mounted } = this.props
    return (
      <div className={App}>
        <ReactCSSTransitionGroup
          transitionName='signup'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          { mounted === true
            ? <Modal onSubmit={this.handleSubmit} />
            : <button onClick={this.showModal}>Sign Up Again</button>}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

export default connect(
  ({modal}) => ({mounted: modal.mounted}),
  (dispatch) => bindActionCreators(modalActionCreators, dispatch)
)(MainContainer)
