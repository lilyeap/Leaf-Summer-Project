import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import LeafIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/AntDesign';


export default function CreateAccountScreen() {
  const navigation = useNavigation();
  // For retreiving the user's input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCopy, confirmPassword] = useState('');

  const successSignupPress = () => {
    navigation.navigate('Intro');
  };
  
  const backToLoginPress = () => {
    navigation.navigate('Login'); 
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
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={backToLoginPress}>
          <Icon name="arrowleft" size={25} color="#666" />
        </TouchableOpacity>

        <LeafIcon style={styles.logo} name="leaf" size={50} color="#666" />
        {/* <Image style={styles.logo} source={require('./images/leaf.png')} /> */}
        <Text style={styles.createText}>Create Account</Text>

        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="user" size={20} color="#666" />
          <TextInput 
            placeholder = {'name'}
            value = {name}
            autoCapitalize = 'words'
            autoCompleteType = 'name'
            onChangeText = { (text) => setName(text) }
            style = {styles.textInput}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="mail" size={20} color="#666" />
          <TextInput
            placeholder = {'email'}
            value = {email}
            autoCapitalize = 'none'
            autoCompleteType = 'email'
            onChangeText = { (text) => setEmail(text) }
            style = {styles.textInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="lock" size={20} color="#666" />
          <TextInput 
            placeholder = {'create password'}
            value = {password}
            autoCapitalize = 'none'
            // secureTextEntry = {true}
            onChangeText = { (text) => setPassword(text) }
            style = {styles.textInput} 
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="lock" size={20} color="#666" />
          <TextInput
            placeholder = {'confirm password'}
            value = {passwordCopy}
            autoCapitalize = 'none'
            // secureTextEntry = {true}
            onChangeText = { (text) => confirmPassword(text) }      
            style = {styles.textInput} 
          />
        </View>

        <TouchableOpacity style = {styles.button} onPress = {successSignupPress}> 
          <Text style = {styles.buttonText}> Join </Text>
        </TouchableOpacity>

        <Text style={styles.agreementText}>
          By signing up for Leaf, you agree to our user agreement.
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
  backButton: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 1,
  },
  createText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
    marginVertical: 15,
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
    marginVertical: 10,
  },
  input: {
    flex: 1,
    color: '#aad6a9',
  },
  button: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginVertical: 5,
    backgroundColor: '#bfe6be',
  },
  buttonText: {
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
