import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

//import icon

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
  return (
    <>
      <View style={styles.searchContainer}>
        <Feather name="search" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          value={term}
          onChangeText={onChangeTerm}
          onEndEditing={onTermSubmit}
        />
      </View>
      <View>
        <Text>{term}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: "#F0EEEE",
    height: 45,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
    fontSize: 35,
    color: "green",
    alignSelf: "center",
  },
  input: {
    fontSize: 18,
    padding: 10,
    flex: 1,
  },
});

export default SearchBar;
