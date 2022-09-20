import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text> pronadjeno je {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    left: 15,
  },
});
export default ResultsList;
