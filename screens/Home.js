import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
  ScrollView,
} from "react-native";

//icon
import { Ionicons } from "@expo/vector-icons";

//somponents
import SearchBar from "../components/SearchBar";

//importing axios api
import yelp from "../api/yelp";
import useResults from "./../hooks/useResults";
import ResultsList from "../components/ResultsList";

const Home = ({ navigation }) => {
  const [term, setTerm] = useState();

  const { searchApi, results, loading, errorMesage } = useResults();

  //console.log(results);

  //$$ categorization

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
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
          searchApi(term);
          setTerm("");
        }}
      />
      <View>
        {results && (
          <Text style={styles.resultText}>
            we have found {results.length} results:{" "}
          </Text>
        )}
        {errorMesage ? <Text style={styles.error}>{errorMesage}</Text> : null}
      </View>
      <ScrollView>
        <ResultsList
          title={"cost effective"}
          results={filterByPrice("$")}
          loading={loading}
        />
        <ResultsList title={"bit pricier"} results={filterByPrice("$$")} />
        <ResultsList title={"big spender"} results={filterByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
  resultText: {
    color: "green",
    fontSize: 16,
    marginVertical: 10,
    marginLeft: 15,
  },
  error: {
    color: "red",
    fontSize: 20,
    marginVertical: 25,
    left: 50,
  },
});

export default Home;
