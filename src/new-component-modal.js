import React from 'react'
import autobind from 'autobind-decorator'
import {Modal, Button, Input} from 'react-bootstrap'

@autobind
class NewComponentModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
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
            <Input type='text' label='content' ref='content' />
          </form>
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={this.close}>Cancel</Button>
          <Button onClick={this._create}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  open() {
    this.setState({
      show: true
    })
  }

  close() {
    this.setState({
      show: false
    })
  }

  _create() {
    var info = {
      x: 0
    , y: 0
    , w: parseInt(this.refs.w.getValue())
    , h: parseInt(this.refs.h.getValue())
    , rotate: 0
    // the short name of your component here
    , type: 'example'
    , data: {
        content: this.refs.content.getValue()
      }
    }
    this.props.actions.newComponent(info)
    this.close()
  }
}

NewComponentModal.propTypes = {

}

NewComponentModal.defaultProps = {

}

export default NewComponentModal
