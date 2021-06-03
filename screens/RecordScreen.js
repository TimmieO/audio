import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, SafeAreaView, StyleSheet, Button, Text, Dimensions } from "react-native";
import { Audio } from "expo-av";



const RecordScreen = () => {
  const [recording, setRecording] = useState();

  const storeData = async (value) => {
    let timeStamp = new Date();
    const key = timeStamp.toString();
    const newKey = key.slice(0, 25);
    const stringified = JSON.stringify(value);
    try {
      await AsyncStorage.setItem(newKey, stringified);
    } catch (err) {}
  };

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(recording);
    } catch (err) {}

  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      storeData(recording);
      setRecording(undefined);
    } catch (err) {}
  };

  return(
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Record Voice</Text>
      </View>

      <View style={styles.bodyContainer}>
      {
        recording ?
          [
            <View style={styles.stopContainer}>
              <Button title={"Stop Recording!"} onPress={stopRecording} />
            </View>
          ]
          :
          [
            <View style={styles.startContainer}>
              <Button title={"Start Recording"} onPress={startRecording} />
            </View>
          ]
      }
      </View>
    </SafeAreaView>
  )
};
export default RecordScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: 'black'
  },
  headerText:{
    color: 'white',
    fontSize: 35,
    textAlign: 'center'
  },
  headerContainer:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
  },

});