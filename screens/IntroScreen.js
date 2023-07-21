import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable, Image  } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

function Page1({ onNext }) {
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph1}> You are a seed </Text>
      <Image style={styles.logo} source={require('./images/seedimage.png')} />
      <Text style={styles.paragraph2}> But with water, sunshine, and soil... </Text>

      <Pressable style={styles.button1} onPress={onNext}>
        <Text style={styles.buttonWords}> next </Text> 
      </Pressable>

    </View>
  );
}

function Page2({ onNext, onPrevious }) {
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph1}> In no time, you will become a tree! </Text>
      <Image style={styles.logo} source={require('./images/treeimage.png')} />
      <Text style={styles.paragraph2}> with many many leaves </Text>

      <Pressable style={styles.button1} onPress={onNext}>
        <Text style={styles.buttonWords}> next </Text> 
      </Pressable>
      <Pressable style={styles.button2} onPress={onPrevious}>
        <Text style={styles.buttonWords}> previous </Text> 
      </Pressable>

    </View>
  );
}


export default function IntroScreen() {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  const onPress2 = () => {
    navigation.navigate('Home');
  };

  //Allows for the page navigation through the buttons
  return (
    <View style={styles.container}>
      {currentPage === 1 && <Page1 onNext={handleNextPage} />}
      {currentPage === 2 && <Page2 onNext={onPress2} 
      onPrevious={handlePreviousPage} />}
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8EC3A3', //other color: #aad6a9
    padding: 8,
  },
  paragraph1: {
    flex: 0.2,
    margin: 15,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  paragraph2: {
    flex: 0.3,
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  logo: {
    justifyContent: 'center',
    width: '70%',
    marginLeft: '18%',
    height: 225,
  },
  button1: {
    width: '30%',
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 30,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#bfe6be',
  },
  button2: {
    width: '30%',
    position: 'absolute',
    bottom: 10,
    left: 10,
    height: 30,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#bfe6be',
  },
  buttonWords: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.50,
    color: 'white',
  },
});
