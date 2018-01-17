import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as  firebase from 'firebase'; 
import {Header,Body,Footer,FooterTab,Container,Content,Button} from 'native-base';
import Login from './componentes/pantallas/login'
export default class App extends Component {
  render() {
    return (
     <Container>
       <Header/>
       <Body>
        <Content style={styles.container} >
          <Login />
        </Content>
        </Body>
        <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
btn: {
    //fontSize: 20,
    textAlign: 'center',
   //justifyContent: 'center',
   marginTop: 20
    
  },
  bod:{
    alignItems: 'center',
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyBBoHb2e0N5ekLpbGl1D_Qsc4IG9uz5UQw",
  authDomain: "markeat-e955c.firebaseapp.com",
  databaseURL: "https://markeat-e955c.firebaseio.com",
  projectId: "markeat-e955c",
  storageBucket: "markeat-e955c.appspot.com",
  messagingSenderId: "716688092956"
};
const firebaseApp = firebase.initializeApp(firebaseConfig); 