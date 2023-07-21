import React from 'react';
import Constants from 'expo-constants';
import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  // For retreiving the user's input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCopy, confirmPassword] = useState('');

  const onPress1 = () => {
    navigation.navigate('Intro');
  };

  // For making the account
  const doCreateUser = async function () {
    const nameValue = name;
    const emailValue = email;
    const passwordValue = password;

    return await Parse.User.signUp(nameValue, emailValue, passwordValue)
      .then((newUser) => {
        // Parse.User.signUp returns the already created ParseUser object if successful
        Alert.alert(
          "Success!",
          `User ${newUser.get("nameValue")} was successfully created!`
        );
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  };


  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.title}> create your account </Text>

      <TextInput
        placeholder = {'name'}
        value = {name}
        autoCapitalize = 'words'
        autoCompleteType = 'name'
        onChangeText = { (text) => setName(text) }
        style = {styles.textInput}
      />
      <TextInput
        placeholder = {'email'}
        value = {email}
        autoCapitalize = 'none'
        autoCompleteType = 'email'
        onChangeText = { (text) => setEmail(text) }
        style = {styles.textInput} 
      />

      <TextInput
        placeholder = {'create password'}
        value = {password}
        autoCapitalize = 'none'
        // secureTextEntry = {true}
        onChangeText = { (text) => setPassword(text) }
        style = {styles.textInput} 
      />

      <TextInput
        placeholder = {'confirm password'}
        value = {passwordCopy}
        autoCapitalize = 'none'
        // secureTextEntry = {true}
        onChangeText = { (text) => confirmPassword(text) }      
        style = {styles.textInput} 
      />

      <TouchableOpacity style = {styles.button} onPress = {onPress1}> 
        <Text style = {styles.buttonText}> Join </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight    
  },
  title: {
    margin: 24,
    marginBottom: 50,
    fontSize: '35%',
    color: '#8ec3a3',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Calibri',
  },
  textInput: {
    width: '70%',
    height: '6.25%',
    margin: '4%',
    color: '#a3a8a2',
    marginLeft: '18%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e8e8e8',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: '5%',
    marginTop: 50,
    marginLeft: '35%',
    padding: 10,
    width: '35%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1F4E5',
  },

  buttonText: {
    fontSize: '20',
    color: '#8ec3a3',
    fontFamily: 'Calibri',
  }
  });
