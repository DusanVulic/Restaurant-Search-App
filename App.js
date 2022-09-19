import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//import navigation container
import { NavigationContainer } from "@react-navigation/native";
//import stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
