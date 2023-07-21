import React from 'react';
import { View, Text, Button, StyleSheet, Pressable, TextInput, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');


  const onPress1 = () => {
    //login logic
    //should validate username and password and make API calls
    //currently only checks if username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };
  
  const onPress2 = () => {
    navigation.navigate('CreateAccount');
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph1}> welcome to leaf </Text>
      <Image style={styles.logo} source={require('./images/leaf.png')} />
      <Text style={styles.paragraph2}> login </Text>

      <TextInput
        style={styles.input} 
        onChangeText={ (username) => onChangeUsername(username)} 
        value={username}
        placeholder = "username"
      />
      

      <TextInput
        style={styles.input} 
        onChangeText={ (password) => onChangePassword(password)} 
        value={password} 
        placeholder = "password" 
      />

      <Pressable style={styles.button} onPress={onPress1}>
        <Text style={styles.buttonWords}> sign in </Text> 
      </Pressable>

      <Pressable style={styles.button2} onPress={onPress2}>
        <Text style={styles.buttonWords}> create an account </Text> 
      </Pressable>

      <Text style={styles.paragraph3}> 
      By signing into Leaf, you agree to our user agreememnt 
      </Text>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row', // To align icon and text horizontally
    alignItems: "center",
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color: '#aad6a9',
    borderColor: 'white',
    borderRadius: 4,
  },
  button: {
    width: '30%',
    marginLeft: '35%',
    height: 40,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 4,
    margin: 15,
    backgroundColor: '#bfe6be',
  },
  button2: {
    width: '50%',
    marginLeft: '25%',
    height: 40,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 4,
    margin: 15,
    backgroundColor: '#bfe6be',
  },
  buttonWords: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.50,
    color: 'white',
  },
  paragraph1: {
    flex: 0.3,
    margin: 15,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  paragraph2: {
    flex: 0,
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  paragraph3: {
    topMargin: 30,
    margin: 30,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#aad6a9',
    padding: 8,
  },
  logo: {
    justifyContent: 'center',
    width: '30%',
    marginLeft: '35%',
    height: 128,
  },
});



