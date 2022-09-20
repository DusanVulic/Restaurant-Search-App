import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//import navigation container
import { NavigationContainer } from "@react-navigation/native";
//import stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import Home from "./screens/Home";
import SecondScreen from "./screens/SecondScreen";

import SingleResult from "./components/SingleResult";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Second" component={SecondScreen} />
          <Stack.Screen name="Result" component={SingleResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
