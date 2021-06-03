import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import ListItems from './ListItems';

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

const List = () => {
  const [recordings, setRecordings] = React.useState();

  const removeRec = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      const value = await AsyncStorage.getAllKeys();
      setRecordings(value);
    } catch (e) {}
  };

  useFocusEffect(
    React.useCallback(() => {
      const GetData = async () => {
        const value = await AsyncStorage.getAllKeys();
        setRecordings(value);
      };
      GetData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recordings}
        renderItem={({item}) => (
          <ListItems item={item} removeRec={removeRec}/>
        )}
        keyExtractor={(item) => item}
        extraData={recordings}
      />
    </View>
  );
};

export default List;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth
  },
  text: {
    color: "white",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});