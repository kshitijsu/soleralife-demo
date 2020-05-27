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
import SwitchIcon from "react-native-vector-icons/MaterialCommunityIcons";
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
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.month}>
        <Text style={styles.monthText}>May</Text>
        <Plus name='pluscircle' style={styles.plus} />
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={styles.daydate}>S{"\n"}3</Text>
        <Text style={{ color: "rgba(206,93,34,1)", fontSize: 25, margin: 20 }}>
          M{"\n"}4
        </Text>
        <Text style={styles.daydate}>T{"\n"}5</Text>
        <Text style={styles.daydate}>W{"\n"}6</Text>
        <Text style={styles.daydate}>T{"\n"}7</Text>
        <Text style={styles.daydate}>F{"\n"}8</Text>
        <Text style={styles.daydate}>S{"\n"}9</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgbg: {},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avataricon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 10,
  },
  header: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  icon: {
    color: "white",
    fontSize: 30,
    marginRight: 10,
  },
  switchbtn: {
    padding: 10,
    // justifyContent: "center",
    alignItems: "center",
    // alignContent: "center",
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
  daydate: {
    color: "white",
    fontSize: 25,
    margin: 20,
  },
});
