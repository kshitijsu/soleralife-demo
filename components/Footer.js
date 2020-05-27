import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navigation from "./Navigation";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  footer: {
    color: "black",
  },
});
