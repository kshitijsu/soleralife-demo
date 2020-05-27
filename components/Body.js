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
          <Text style={styles.doctorText}>
            You have <Text style={{ color: "black" }}>4 appointments.</Text>
          </Text>
        </View>
        <Icon name='dots-two-vertical' style={styles.dot} />
      </View>
      <View style={styles.dotnline}>
        <Dotnline />
        <View style={{ flex: 2, marginLeft: 30 }}>
          {/* <Card
            active='true'
            name='Barry Allen'
            time='12 pm'
            symptoms='Fever'
          /> */}
          <Card
            active='false'
            name='Barry Allen'
            time='12 pm'
            symptoms='Fever'
          />
          <Card
            active='false'
            name='Oliver Queen'
            time='3:30 pm'
            symptoms='Consult & Diagnosis'
          />
          <Card
            active='false'
            name='Lyla Michaels'
            time='9 pm'
            symptoms='Consult & Diagnosis'
          />
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
    color: "#ADADAD",
    fontWeight: "bold",
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
