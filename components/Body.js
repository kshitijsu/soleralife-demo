import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Card from "./Card";
import Dotnline from "./dotnline";

export default function Body() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text style={styles.doctorText}>Hello Doctor</Text>
          <Text style={styles.doctorText}>You have 4 Appointments.</Text>
        </View>
        <Icon name='dots-two-vertical' style={styles.dot} />
      </View>
      <View style={styles.dotnline}>
        <Dotnline />
        <View>
          <Card active='true' name='Barry Allen' />
          <Card active='false' name='Oliver Queen' />
          <Card active='false' name='Lyla Michaels' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  body: {
    color: "black",
    marginLeft: 40,
    marginTop: 50,
    fontSize: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  doctorText: {
    fontSize: 20,
  },
  dot: {
    marginRight: 15,
    fontSize: 50,
  },
  dotnline: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
