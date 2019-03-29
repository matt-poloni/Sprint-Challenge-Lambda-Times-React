import React from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, Input, Form } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = e => {
    e.preventDefault();
    localStorage.setItem('username',this.state.username);
    this.setState({ password: '' });
    window.location.reload();
  }

  render() {
    return (
      <Modal>
        <ModalHeader>Lambda Times</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={this.login}
          >
            <Input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Username"
              bsSize="lg"
              onChange={this.handleChanges}
            />
            <Input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              bsSize="lg"
              onChange={this.handleChanges}
            />
            <Button type="submit">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    )
  }
}

export default Login;