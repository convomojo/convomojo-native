import React, { Component } from 'react';
import { View } from 'react-native';
import { Container,Header,Left,Right,Icon,Text } from 'native-base';


export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
           <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ marginRight: 15 }} />
          </Left>
          <Right onPress={this.props.logout}>
           <Icon name="md-cart" />
          </Right>
        </Header>
        <View style={{ marginTop:100,marginLeft:100}}>
          <Text>PROFILE PAGE</Text>
        </View>
      </Container>
    );
   }
}
