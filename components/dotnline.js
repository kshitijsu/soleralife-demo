import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Dotnline() {
  return (
    <View style={{ alignItems: "center", marginTop: 25 }}>
      <View style={styles.dot} />
      <View style={styles.line} />
      <View style={styles.dot} />
      <View style={styles.line} />
      <View style={styles.dot} />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 100,
    marginLeft: 30,
    marginTop: 10,
    backgroundColor: "orange",
  },
  line: {
    marginLeft: 30,
    marginTop: 10,
    height: 80,
    width: 5,
    backgroundColor: "orange",
  },
});
