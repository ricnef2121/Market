import React, {Component} from 'react';
import{
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                Login
                </Text>
            </View>
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
  
export default Login;