import React from 'react'
import autobind from 'autobind-decorator'
import { Modal, Button, Input } from 'react-bootstrap'

@autobind
class NewComponentModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  open() {
    this.setState({ show: true })
  }

  close() {
    this.setState({ show: false })
  }

  _create() {
    const info = {
      x: 0,
      y: 0,
      w: parseInt(this.refs.w.getValue(), 10),
      h: parseInt(this.refs.h.getValue(), 10),
      rotate: 0,
    // the short name of your component here
      type: 'example',
      data: {
        content: this.refs.content.getValue(),
      },
    }
    this.props.actions.newComponent(info)
    this.close()
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.close}>
        <Modal.Header >
          <Modal.Title >New Component</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form >
            <Input type='text' label='w' ref='w'/>
            <Input type='text' label='h' ref='h'/>
            <Input type='text' label='content' ref='content'/>
          </form>
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.close}>Cancel</Button>
          <Button onClick={this._create}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

NewComponentModal.propTypes = {
  actions: React.PropTypes.object,
}

NewComponentModal.defaultProps = {

}

export default NewComponentModal
