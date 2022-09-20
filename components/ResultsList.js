import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});
export default ResultsList;
