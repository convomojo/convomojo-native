import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Right, Title, Body, Tabs, Tab } from 'native-base';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export default class Auth extends Component {
  constructor(){
    super();
    this.state = {
      signup: false
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Convomojo</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Log In">
            <Login login={ this.props.login } />
          </Tab>
          <Tab heading="Sign Up">
            <SignUp createUser={ this.props.createUser } />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
