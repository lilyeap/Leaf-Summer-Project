import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//Defines the first Page
function Page1({ onNext }) {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Leaf Project</Text>
      <Text style={styles.text}>Welcome to the "Getting to Know the Teck" App Demo!!!</Text>
      <Button title="Next Page" onPress={onNext} />
    </View>
  );
}

// Defines the Second Page
function Page2({ onNext, onPrevious }) {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Money Management</Text>
      <Text style={styles.paragraph} > Welcome to the First Leaf Finance Lesson</Text>
      <Text style={styles.paragraph}>{"\n"} This is the first lesson instructions that users will need to read before being able to check the boxes, this is filler text for now</Text>
      <Button title="Previous Page" onPress={onPrevious} />
      <Text> {"\n"}</Text>
      <Button title="Next Page" onPress={onNext} />
    </View>
  );
}

//Defines the Third Page
function Page3({ onPrevious }) {
  //Declares the checkboxes
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

//retirns the things that can be seen(if it's under View)
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Task Dashboard</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxText}>Task 1</Text>
          <input type="checkbox" value={checkbox1} onChange={() => setCheckbox1(!checkbox1)} />
        </View>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxText}>Task 2</Text>
          <input type="checkbox" value={checkbox2} onChange={() => setCheckbox2(!checkbox2)} />
        </View>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxText}>Task 3</Text>
          <input type="checkbox" value={checkbox3} onChange={() => setCheckbox3(!checkbox3)} />
        </View>
      </View>
      <Button title="Previous Page" onPress={onPrevious} />
    </View>
  );
}


export default function HomeScreen() {
  const [currentPage, setCurrentPage] = useState(1);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
  }
  
//Allows for the page navigation through the buttons
  return (
    <View style={styles.container}>
      {currentPage === 1 && <Page1 onNext={handleNextPage} />}
      {currentPage === 2 && <Page2 onNext={handleNextPage} onPrevious={handlePreviousPage} />}
      {currentPage === 3 && <Page3 onPrevious={handlePreviousPage} />}
    </View>
  );
}

//holds the styles for everything that can be seen in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8ED3A3',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: 'bold'
  },
  paragraph: {
    fontSize: 18,
    color: "white"
  },
  checkboxContainer: {
    marginTop: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginRight: 10,
    color: "white"
  },
});
