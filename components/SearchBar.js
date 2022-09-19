import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

//import icon

import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  const [term, setTerm] = useState();

  return (
    <View style={styles.searchContainer}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={(input) => setTerm(input)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
    fontSize: 35,
    color: "black",
    alignSelf: "center",
  },
  input: {
    fontSize: 18,
    padding: 10,
    flex: 1,
  },
});

export default SearchBar;
