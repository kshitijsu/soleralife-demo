import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Content() {
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <Body style={styles.body} />
      <Footer style={styles.footer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    height: 100,
    width: "100%",
    backgroundColor: "red",
  },
  body: {
    height: 100,
    width: "100%",
    backgroundColor: "green",
  },
  footer: {
    height: 100,
    width: "100%",
    backgroundColor: "blue",
  },
});
