import React from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <Image source={{ uri: result.image_url }} style={styles.image} />

      <View>
        <Text style={styles.rating}>
          {result.rating} stars {result.review_count} Rewiews
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    color: "green",
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginHorizontal: 15,
  },
  rating: {
    marginTop: 5,
    marginLeft: 15,
  },
});
export default ResultDetail;
