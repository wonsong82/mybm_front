import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import TransitionGroup from 'react/lib/ReactTransitionGroup'
import PageComponent from '../../components/app/Page'


// Transition wrapper. <Transition>[] inside gets enter/leave interface
class Page extends Component {

  constructor(props) {
    super(props)
    this.state = {
      key: 0,
      path: ''
    }
  }

  componentDidMount() {
    const e = this.props
    if(e.children && e.children.props.location ){
      this.setState({ path: e.children.props.location.pathname })
    }
  }


  componentWillReceiveProps(nextProps) {
    const e = nextProps
    if(e.children && e.children.props.location && e.children.props.location.pathname != this.state.path){
      this.setState({ key: this.state.key-1, path: e.children.props.location.pathname })
    }
  }


  render() {
    return (
      <TransitionGroup component="div" className="PageTransition">
        <Transition {...this.props} key={this.state.key} />
      </TransitionGroup>
    )
  }
}
Page.propTypes = {}


// define transitions on enter and leave
class Transition extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PageComponent {...this.props} ref="component" />
    )
  }


  componentWillEnter(callback) {
    $(findDOMNode(this))
      .velocity('stop')
      .velocity({
        translateX: $(window).width()
      })
      .velocity('finish')
      .velocity('reverse', {
        duration: 500,
        easing: 'easeInOutQuart'
      })
    callback()
  }

  componentWillLeave(callback) {
    $(findDOMNode(this))
      .velocity('stop')
      .velocity({
        translateX: $(window).width() * -1
      })
      .velocity('finish')
      .velocity({
        translateX: $(window).width() * -2
      }, {
        duration: 500,
        easing: 'easeInOutQuart',
        complete: () => callback()
      })
  }

}



export default Page




