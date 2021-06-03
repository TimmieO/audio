import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Dimensions } from "react-native";
import List from "../components/List";

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Your Recordings</Text>
      </View>
      <View style={styles.listContainer}>
        <List />
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  headerText:{
    color: 'white',
    fontSize: 35,
    textAlign: 'center'
  },
  headerContainer:{
    width: windowWidth,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  listContainer:{
  }
});