import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header,Body,Footer,Container,Content,Button} from 'native-base';

export default class App extends Component {
  render() {
    return (
     <Container>
       <Header/>
       <Body>
        <Content>
        <Button block >
          <Text>
            Button
          </Text>
        </Button>
        </Content>
        </Body>
        <Footer />
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
btn: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    
  },
  bod:{
    alignItems: 'center',
  }
});
