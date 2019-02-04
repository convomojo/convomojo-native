import React, { Component } from 'react';
import { Text } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  updateValue = (name, text) => {
    this.setState({
      [name]: text
    })
  }

  submit = () => {
    this.props.createUser( this.state )
  }

  render() {
    return (
      <Form>
        <Item>
          <Label>Username</Label>
          <Input onChangeText={(text) => this.updateValue('username', text)} />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input autoComplete='email'
            onChangeText={(text) => this.updateValue('email', text)}
            keyboardType='email-address' />
        </Item>
        <Item last>
          <Label>Password</Label>
          <Input secureTextEntry={true}
            onChangeText={(text) => this.updateValue('password', text)}
            autoComplete='password' />
        </Item>
        <Button block onPress={ this.submit }>
          <Text>Sign Up</Text>
        </Button>
        <Text>{this.state.username}</Text>
      </Form>
    )
  }
}