import React from 'react'
import autobind from 'autobind-decorator'
import styles from '../css/component.css'
import { Modal, Button } from 'react-bootstrap'
import NewComponentConfig from './new-component-modal'

@autobind
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfig: false,
      content: this.props.data.content,
    }
  }

  toJson() {
    // return the data you want to save as an object
    return {
      content: this.state.content,
    }
  }

  openConfig() {
    this.setState({ showConfig: true })
  }

  closeConfig() {
    this.setState({ showConfig: false })
  }

  _applyConfig() {
    // apply changes here
    this.closeConfig()
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

        <h1 className={styles.text}>{this.state.content}</h1>
      </div>
    )
  }
}

Example.propTypes = {
  data: React.PropTypes.object,
}

Example.NewComponentConfig = NewComponentConfig

export default Example
