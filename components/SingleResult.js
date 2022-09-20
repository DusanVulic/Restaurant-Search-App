import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";

import yelp from "../api/yelp";

//fetching data from yelp
import useResults from "./../hooks/useResults";

const SingleResult = ({ route, navigation }) => {
  const { id: resultId } = route.params;

  const [result, setResult] = useState(null);

  //console.log(result);

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
      <View style={styles.container}>
        <Text style={styles.title}> {result.name}</Text>
        <Text style={styles.address}>
          {result.location.address1},{result.location.city}
        </Text>
        <Text style={styles.phone}>Phone : {result.display_phone}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "green",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  address: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 15,
  },
  phone: {
    color: "green",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 10,
    alignSelf: "center",
  },
});
export default SingleResult;
