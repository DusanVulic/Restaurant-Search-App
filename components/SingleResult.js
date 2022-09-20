import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import yelp from "../api/yelp";

//fetching data from yelp
import useResults from "./../hooks/useResults";

const SingleResult = ({ route, navigation }) => {
  const { id: resultId } = route.params;

  const [result, setResult] = useState(null);

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(resultId);
  }, []);

  if (!result) {
    return <ActivityIndicator size="large" marginVertical={150} flex={1} />;
  }

  if (result) {
    return (
      <View>
        <Text style={styles.title}> {result.name}</Text>
        <Text style={styles.address}>
          {result.location.address1},{result.location.city}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    color: "green",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  address: {
    fontSize: 15,
    textAlign: "center",
  },
});
export default SingleResult;
