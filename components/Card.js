import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Card(props) {
  const isActive = props.active;
  if (isActive == "true") {
    return (
      <View style={styles.active}>
        <Image
          source={require("../assets/images/profile.jpg")}
          style={styles.avataricon}
        />
        <View>
          <Text style={styles.textName}>{props.name}</Text>
          <Text style={styles.textSymptoms}>Fever</Text>
          <Text
            style={{
              color: "rgba(206,93,34,1)",
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            12 pm
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.nonactive}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.name}</Text>
          <Text
            style={{
              fontSize: 20,
              color: "rgba(206,93,34,1)",
              fontWeight: "bold",
            }}
          >
            3:30 pm
          </Text>
        </View>
        <Text
          style={{ fontSize: 20, marginTop: 30, color: "rgba(206,204,204,1)" }}
        >
          Consult & Diagnosis
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 20,
    width: 300,
    height: 100,
    marginTop: 10,
  },
  nonactive: {
    borderWidth: 1,
    borderColor: "rgba(200, 200, 200,1)",
    borderRadius: 20,
    width: 300,
    height: 100,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  avataricon: {
    margin: 10,
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 10,
  },
  textName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
  },
  textSymptoms: {
    color: "white",
    fontStyle: "italic",
    marginTop: 5,
    marginBottom: 5,
  },
});
