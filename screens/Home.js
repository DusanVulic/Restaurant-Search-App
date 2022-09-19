import React from "react";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Second")}>
        <Text style={styles.linkStyle}>go to second page</Text>
      </Pressable>
      <Text>home page </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  linkStyle: {
    color: "blue",
    textAlign: "center",
    marginVertical: 15,
  },
});

export default Home;
