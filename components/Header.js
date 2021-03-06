import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Plus from "react-native-vector-icons/AntDesign";

export default function Header() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ImageBackground
      style={styles.imgbg}
      source={require("../assets/images/imgbg.jpg")}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.avataricon}
        />
        <Text style={styles.header}>Appointments</Text>
        <Icon name='menu' style={styles.icon} />
      </View>
      <View style={styles.switchbtn}>
        <Switch
          trackColor={{ false: "white", true: "white" }}
          thumbColor={isEnabled ? "#69CE8E" : "#f4f3f4"}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.month}>
        <Text style={styles.monthText}>May</Text>
        <Plus name='pluscircle' style={styles.plus} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.day}>S</Text>
        <Text style={styles.today}>M</Text>
        <Text style={styles.day}>T</Text>
        <Text style={styles.day}>W</Text>
        <Text style={styles.day}>T</Text>
        <Text style={styles.day}>F</Text>
        <Text style={styles.day}>S</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.date}>3</Text>
        <Text style={styles.today}>4</Text>
        <Text style={styles.date}>5</Text>
        <Text style={styles.date}>6</Text>
        <Text style={styles.date}>7</Text>
        <Text style={styles.date}>8</Text>
        <Text style={styles.date}>9</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgbg: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    alignItems: "center",
  },
  avataricon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 10,
  },
  header: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  icon: {
    color: "white",
    fontSize: 30,
    marginRight: 10,
  },
  switchbtn: {
    padding: 10,
    alignItems: "center",
  },
  month: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  monthText: {
    color: "white",
    fontSize: 25,
    marginLeft: 10,
  },
  plus: {
    color: "white",
    marginRight: 10,
    fontSize: 30,
  },
  day: {
    color: "white",
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  date: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  today: {
    color: "rgba(206,93,34,1)",
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
