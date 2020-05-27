import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Untilted from "./components/Untilted";
import Content from "./components/Content";

export default function App() {
  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
