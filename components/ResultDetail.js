import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const ResultDetail = ({ result, navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Result", {
      id: result.id,
    });
  };

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text style={styles.title}>{result.name}</Text>
        <Image source={{ uri: result.image_url }} style={styles.image} />

        <View>
          <Text style={styles.rating}>
            {result.rating} stars {result.review_count} Rewiews
          </Text>
        </View>
      </View>
    </Pressable>
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
