import React from "react";
import { View, Text } from "react-native";

const SingleResult = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>Single Result have : {id}</Text>
    </View>
  );
};

export default SingleResult;
