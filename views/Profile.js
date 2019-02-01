import React, { Component } from 'react';
import { View } from 'react-native';
import { Container,Header,Left,Right,Icon,Text } from 'native-base';


export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
           <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Right>
           <Icon name="md-cart" style={{ color: 'white' }} />
          </Right>
        </Header>
        <View style={{ marginTop:100,marginLeft:100}}>
          <Text>PROFILE PAGE</Text>
        </View>
      </Container>
    );
   }
}
