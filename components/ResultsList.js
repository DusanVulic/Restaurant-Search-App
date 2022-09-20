import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
//result detail component
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, loading }) => {
  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" marginVertical={150} flex={1} />
      </View>
    );

  if (!loading) {
    return (
      <View>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return <ResultDetail result={item} loading={loading} />;
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  loadingContainer: {
    height: 1000,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    left: 15,
  },
});
export default ResultsList;
