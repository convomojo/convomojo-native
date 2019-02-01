import React, { Component } from 'react';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import { Container} from 'native-base';

import Chat from './views/Chat';
import Profile from './views/Profile';

const MyDrawerNavigator = createDrawerNavigator({
   Chat:{ 
      screen: Chat,
   },
   Profile: {
      screen: Profile,
   },
 });
 
const MyApp = createAppContainer(MyDrawerNavigator);

class App extends Component{
    render(){
      return(
        <Container>
          <MyApp >
          </MyApp >
        </Container>
      );
    }
}

export default App;
