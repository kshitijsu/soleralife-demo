import React from "react";
import { View, StyleSheet, Text } from "react-native";
//Icons
import Home from "react-native-vector-icons/MaterialCommunityIcons";
import Mail from "react-native-vector-icons/Entypo";
import Heart from "react-native-vector-icons/Entypo";
import Settings from "react-native-vector-icons/Ionicons";

export default function Navigation() {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <View
          style={{
            backgroundColor: "rgba(206,93,34,0.2)",
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            flexDirection: "row",
            borderRadius: 100,
          }}
        >
          <Home name='home' style={styles.home} />
          <Text style={styles.homeText}>Home</Text>
        </View>
      </View>
      <View style={styles.two}>
        <Mail name='mail' style={styles.mail} />
      </View>
      <View style={styles.three}>
        <Settings name='md-settings' style={styles.settings} />
      </View>
      <View style={styles.four}>
        <Heart name='heart' style={styles.heart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  one: {
    flex: 1.5,
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  two: {
    flex: 1,
    height: "100%",
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  three: {
    flex: 1,
    height: "100%",
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  four: {
    flex: 1,
    height: "100%",
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  //Icons
  home: {
    color: "rgba(206,93,34,1)",
    fontSize: 40,
    marginLeft: 10,
  },
  mail: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  settings: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  heart: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  //Text
  homeText: {
    fontSize: 20,
    marginRight: 10,
    color: "rgba(206,93,34,1)",
    fontWeight: "bold",
  },
});
