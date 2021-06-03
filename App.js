import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, StatusBar } from "react-native";
import ListScreen from "./screens/ListScreen";
import RecordScreen from "./screens/RecordScreen";
import globalStyles from "./style/styles";

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {
            justifyContent: "center",
          },
          activeTintColor: globalStyles.activeNavTextColor,
          inactiveBackgroundColor: globalStyles.inActiveNavBackgroundColor,
          activeBackgroundColor: globalStyles.activeNavBackgroundColor,
        }}
      >
        <Tab.Screen name="Record Voice" component={RecordScreen} screen />
        <Tab.Screen name="Play Recordings" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;