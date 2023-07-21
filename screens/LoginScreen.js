import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable, TextInput, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <Icon style={styles.logo} name="leaf" size={50} color="#666" />
        <Text style={styles.logoText}>Welcome to Leaf</Text>
        {/* <Image style={styles.logo} source={require('./images/leaf.png')} /> */}
        <Text style={styles.loginText}>Login</Text>

        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="user" size={20} color="#666" />
          <TextInput 
            style={styles.input} 
            onChangeText={setUsername} 
            value={username}
            placeholder="Username"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="lock" size={20} color="#666" />
          <TextInput
            style={styles.input} 
            onChangeText={setPassword} 
            value={password} 
            placeholder="Password" 
            secureTextEntry
          />
        </View>

        <Pressable style={styles.button} onPress={onPress1}>
          <Text style={styles.buttonWords}>Sign In →</Text>
        </Pressable>

        <Pressable style={styles.button2} onPress={onPress2}>
          <Text style={styles.buttonWords}>Create Account →</Text>
        </Pressable>

        <Text style={styles.agreementText}>
          By signing into Leaf, you agree to our user agreement
        </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#aad6a9',
    alignItems: 'center', // Center the box horizontally
    padding: 16,
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginVertical: 15,
  },
  logo: {
    marginBottom: 30,
  },
  loginText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginVertical: 10,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    width: '75%',
  },
  icon: {
    marginRight: 10,
  },
  logo: {
  },
  input: {
    flex: 1,
    color: '#aad6a9',
  },
  button: {
    width: '30%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginVertical: 15,
    backgroundColor: '#bfe6be',
  },
  button2: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginVertical: 5,
    backgroundColor: '#bfe6be',
  },
  buttonWords: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#fff',
  },
  agreementText: {
    marginVertical: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
