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
  Right, Body, Icon,Input
} from 'native-base';  

import ListComponent from './componentes/logica/Listcomponent';


class App extends Component { 


  constructor(){
    super();
    this.state = {
      nuevo: '',
      lista: [   ]
  }

}

changeDone = (item) => {
  console.log(item);
  this.state.lista = this.state.lista.filter(i => i !== item);
  this.state.lista.push(item);
  this.setState({lista: this.state.lista});
}


agregarItem = () => {
  let nuevo = this.state.nuevo
  nuevo = {uid:'',id:nuevo,name:nuevo,done:false};
  firebase.database().ref('items').push(nuevo);
  this.state.lista.push(nuevo);
  this.setState({lista: this.state.lista});
  console.log(nuevo);


}


listenForItems = (itemsRef) => {
  itemsRef.on('value', (snap) => {

    // get children as an array
    var lista = [];
    snap.forEach((child) => {
      lista.push({
        name: child.val().name,
        done: child.val().done,  
        id: child.key
      });
    });

    this.setState({
      lista: lista
    });

  });
}

componentDidMount() {
  const itemsRef = firebase.database().ref('items');
  this.listenForItems(itemsRef);
}

borrar = (item) => {
  let updates = {};
  updates['/items/' + item.id] = null;
  firebase.database().ref().update(updates);

}


render(){
  return(

      <Container>
        <Header>
          <Left>
            <Button transparent>
            <Icon name='menu'/>
            </Button>
            </Left>
            <Body>
              <Title>Cabecera</Title>
              </Body>
              <Right />
              </Header>
              
          <Content>
          
          <Input
                value={this.state.nuevo}
                placeholder='Agrega otro más'
                onChangeText={nuevo=>this.setState({nuevo})}
                />


              <View>
                  <ListComponent
                      lista={this.state.lista}
                      changeDone={this.changeDone}
                      borrar={this.borrar}
                      />
              </View>
           
          </Content>
         
          <Footer>
            <FooterTab>
              <Button full
              onPress={this.agregarItem}
              >
              <Text>Agregar</Text>
              </Button>
            </FooterTab>
            </Footer>
      </Container>
          
  );
}
}

const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //justifyContent: 'center',
  //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    
 // },
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

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyBBoHb2e0N5ekLpbGl1D_Qsc4IG9uz5UQw",
  authDomain: "markeat-e955c.firebaseapp.com",
  databaseURL: "https://markeat-e955c.firebaseio.com",
  projectId: "markeat-e955c",
  storageBucket: "markeat-e955c.appspot.com",
  messagingSenderId: "716688092956"
};
const firebaseApp = firebase.initializeApp(firebaseConfig); 