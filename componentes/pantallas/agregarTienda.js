import * as  firebase from 'firebase'; 
import React, { Component } from 'react';
import {
  //Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Header,
  Title, Content, Footer,
  FooterTab, Button, Left,
  Right, Body, Icon
} from 'native-base';  
import ListComponent from './componentes/logica/Listcomponent';


class agregar extends Component { 
  constructor(){
    super();
    this.state = {
      lista: [
                  {
                      id: 1,
                      name: 'pollo',
                      done: false
                  },
                  {
                      id: 2,
                      name: 'sopa',
                      done: false
                  },
                  {
                      id: 3,
                      name: 'ropa',
                      done: false
                  }
              ]
  }

}

changeDone = (item) => {
  console.log(item);
  this.state.lista = this.state.lista.filter(i => i !== item);
  this.state.lista.push(item);
  this.setState({lista: this.state.lista});
}
render(){
  return(

      <Container>
          <Content>
              <View>
                  <ListComponent
                      lista={this.state.lista}
                      changeDone={this.changeDone}
                      />
              </View>
          </Content>
      </Container>
          
  );
}
}


export default agregar;

const firebaseConfig = {
  apiKey: "AIzaSyBBoHb2e0N5ekLpbGl1D_Qsc4IG9uz5UQw",
  authDomain: "markeat-e955c.firebaseapp.com",
  databaseURL: "https://markeat-e955c.firebaseio.com",
  projectId: "markeat-e955c",
  storageBucket: "markeat-e955c.appspot.com",
  messagingSenderId: "716688092956"
};
const firebaseApp = firebase.initializeApp(firebaseConfig); 