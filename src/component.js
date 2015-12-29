import React from 'react'
import classnames from 'classnames'
import autobind from 'autobind-decorator'
import styles from '../css/component.css'
import {Modal, Button} from 'react-bootstrap'
import NewComponentConfig from './new-component-modal'

@autobind
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfig: false
    , content: this.props.data.content
    }
  }

  render() {
    return (
      <div {...this.props}>

        <Modal show={this.state.showConfig} onHide={this.closeConfig}>
          <Modal.Header >
            <Modal.Title >Config</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            Config goes here
          </Modal.Body>
          <Modal.Footer >
            <Button onClick={this.closeConfig}>Cancel</Button>
            <Button onClick={this._applyConfig}>Confirm</Button>
          </Modal.Footer>
        </Modal>

        <h1 style={{textAlign: 'center'}}>{this.state.content}</h1>
      </div>
    )
  }

  toJson() {
    // return the data you want to save as an object
    return {
      content: this.state.content
    }
  }

  openConfig() {
    this.setState({
      showConfig: true
    })
  }

  closeConfig() {
    this.setState({
      showConfig: false
    })
  }

  _applyConfig() {
    // apply changes here
    this.closeConfig()
  }
}

Example.NewComponentConfig = NewComponentConfig

export default Example
