import React from "react";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";

//icon
import { Ionicons } from "@expo/vector-icons";

//somponents
import SearchBar from "../components/SearchBar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/** navigation to second page */}
      {/* <Pressable onPress={() => navigation.navigate("Second")}>
        <Text style={styles.linkStyle}>go to second page</Text>
      </Pressable> */}

      <Text style={styles.headerLight}>Restaraunt</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.headerBold}>search app </Text>
        <Ionicons name="restaurant-outline" style={styles.icon} />
      </View>

      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  linkStyle: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
    marginVertical: 15,
  },
  headerLight: {
    fontSize: 25,
    marginLeft: 20,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerBold: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
  },
  icon: {
    color: "green",
    fontSize: 30,
  },
});

export default Home;
