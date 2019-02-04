import React, { Component } from 'react';
import axios from 'axios';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';
import { Text, AsyncStorage } from 'react-native';
import { Container } from 'native-base';

import Chat from './views/Chat';
import Profile from './views/Profile';
import Auth from './views/Auth'

const API_URL = 'http://localhost:3000'
const MyDrawerNavigator = createDrawerNavigator({
  Profile: {
    screen: Profile
  },
  Chat:{ 
    screen: Chat
  }
 });
 
const MyApp = createAppContainer(MyDrawerNavigator);

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentUser: null,
      token: null
    }
  }

  renderContent = () => {
    if( this.state.currentUser ){
      return( <MyApp screenProps={ { logout: this.logOut, currentUser: this.state.currentUser } } /> )
    }else{
      return( <Auth createUser={this.createUser} login={this.logIn} /> )
    }
  }

  getUser = ( token ) => {
    axios.get(`${API_URL}/users?token=${token}`)
      .then( data => {
        this.setCurrentUser( data.data.result )
      } )
      .catch( console.log )
  }

  getToken = () => {
    token = AsyncStorage.getItem( 'token' ).then( res => {
      console.log("REZZ", res)
      this.getUser( res )
    } );
    console.log("weeee", token)
  }

  componentDidMount(){
    this.getToken()
  }

  setCurrentUser = ( user ) => {
    this.setState({ currentUser: user, token: user.token }, () => {
      AsyncStorage.setItem('token', user.token)
    })
  }

  logOut = () => {
    this.setState({ currentUser: null, token: null }, () => {
      AsyncStorage.removeItem('token')
    })
  }

  createUser = ( data ) => {
    axios.post(`${ API_URL }/users`, { user: data })
      .then( data => {
        this.setCurrentUser( data.data.result )
      } )
      .catch( console.log )
  }

  logIn = ( data ) => {
    axios.post(`${ API_URL }/sessions`, data)
      .then( data => {
        this.setCurrentUser( data.data.result )
      } )
      .catch( console.log )
  }

  render(){
    return(
      <Container>
        { this.renderContent() }
        <Text>{this.state.token}</Text>
      </Container>
    );
  }
}

export default App;
