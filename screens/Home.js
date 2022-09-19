import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";

//icon
import { Ionicons } from "@expo/vector-icons";

//somponents
import SearchBar from "../components/SearchBar";

//importing axios api
import yelp from "../api/yelp";

const Home = ({ navigation }) => {
  const [term, setTerm] = useState();

  const [results, setResults] = useState([]);

  const [errorMesage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setResults([]);
      setErrorMessage("something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      {/** navigation to second page */}
      {/* <Pressable onPress={() => navigation.navigate("Second")}>
        <Text style={styles.linkStyle}>go to second page</Text>
      </Pressable> */}

      <Text style={styles.headerLight}>Restaurant</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.headerBold}>search app </Text>
        <Ionicons name="restaurant-outline" style={styles.icon} />
      </View>

      <SearchBar
        term={term}
        onChangeTerm={(input) => setTerm(input)}
        onTermSubmit={() => {
          searchApi();
          setTerm("");
        }}
      />
      <View>
        <Text>we have found {results.length}</Text>
        {errorMesage ? <Text style={styles.error}>{errorMesage}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  linkStyle: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
    marginVertical: 15,
  },
  headerLight: {
    fontSize: 25,
    marginLeft: 20,
    color: "green",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerBold: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
  },
  icon: {
    color: "green",
    fontSize: 30,
  },
  error: {
    color: "red",
    fontSize: 20,
    marginVertical: 25,
    left: 50,
  },
});

export default Home;
