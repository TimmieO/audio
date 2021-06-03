import React from "react";
import { useFocusEffect } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions
} from "react-native";
import PlayButton from "./PlaySound";

const ListItems = ({item, removeRec}) => {
  const [recordings, setRecordings] = React.useState();

  return (
    <View style={styles.listItem} key={item}>
      <Text style={styles.text}>{item}</Text>
      <View style={styles.buttonContainer}>
        <PlayButton data={item} />
        <Button onPress={() => removeRec(item)} title="Delete"></Button>
      </View>
    </View>
  );
};

export default ListItems;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  listItem: {
    marginBottom: 10,
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});