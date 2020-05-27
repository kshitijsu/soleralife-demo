import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.helloDoctorColumnRow}>
          <View style={styles.helloDoctorColumn}>
            <Text style={styles.helloDoctor}>Hello Doctor,</Text>
            <Text style={styles.helloDoctor1}>You have 4 appointments.</Text>
          </View>
          <EntypoIcon
            name='dots-two-vertical'
            style={styles.icon3}
          ></EntypoIcon>
        </View>
        <View style={styles.ellipse2ColumnRow}>
          <View style={styles.ellipse2Column}>
            <Svg viewBox='0 0 100 100' style={styles.ellipse2}>
              <Ellipse
                stroke='rgba(203,197,197,1)'
                strokeWidth={14}
                fill='rgba(206,93,34,1)'
                cx={50}
                cy={50}
                rx={43}
                ry={43}
              ></Ellipse>
            </Svg>
            <View style={styles.rect5}></View>
            <Svg viewBox='0 0 100 100' style={styles.ellipse}>
              <Ellipse
                stroke='rgba(230, 230, 230,1)'
                strokeWidth={0}
                fill='rgba(206,93,34,1)'
                cx={50}
                cy={50}
                rx={50}
                ry={50}
              ></Ellipse>
            </Svg>
            <View style={styles.rect6}></View>
            <Svg viewBox='0 0 100 100' style={styles.ellipse1}>
              <Ellipse
                stroke='rgba(230, 230, 230,1)'
                strokeWidth={0}
                fill='rgba(206,93,34,1)'
                cx={50}
                cy={50}
                rx={50}
                ry={50}
              ></Ellipse>
            </Svg>
            <View style={styles.rect7}></View>
          </View>
          <View style={styles.rect4Column}>
            <View style={styles.rect4}>
              <View style={styles.image2Row}>
                <Image
                  source={require("../assets/images/avatar.png")}
                  resizeMode='cover'
                  style={styles.image2}
                ></Image>
                <View style={styles.barryAllenColumn}>
                  <Text style={styles.barryAllen}>Barry Allen</Text>
                  <Text style={styles.fever}>Fever</Text>
                  <Text style={styles.loremIpsum}>12 pm</Text>
                </View>
              </View>
            </View>
            <View style={styles.rect3}>
              <View style={styles.oliverQueenRow}>
                <Text style={styles.oliverQueen}>Oliver Queen</Text>
                <Text style={styles.loremIpsum1}>3:30 pm</Text>
              </View>
              <Text style={styles.consultDiagnosis}>
                Consult &amp; Diagnosis
              </Text>
            </View>
            <View style={styles.rect2}>
              <View style={styles.lylaMichealsRow}>
                <Text style={styles.lylaMicheals}>Lyla Micheals</Text>
                <Text style={styles.loremIpsum2}>9 pm</Text>
              </View>
              <Text style={styles.consultDiagnosis1}>
                Consult &amp; Diagnosis
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonStackRow}>
          <View style={styles.buttonStack}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.home}>Home</Text>
            </TouchableOpacity>
            <MaterialCommunityIconsIcon
              name='home'
              style={styles.icon4}
            ></MaterialCommunityIconsIcon>
          </View>
          <EntypoIcon name='mail' style={styles.icon6}></EntypoIcon>
          <IoniconsIcon name='md-settings' style={styles.icon7}></IoniconsIcon>
          <EntypoIcon name='heart' style={styles.icon8}></EntypoIcon>
        </View>
      </View>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/avatar.png")}
          resizeMode='cover'
          style={styles.image}
        ></Image>
        <Text style={styles.appointments}>Appointments</Text>
        <FeatherIcon name='menu' style={styles.icon}></FeatherIcon>
      </View>
      <View style={styles.mayRow}>
        <Text style={styles.may}>May</Text>
        <FeatherIcon name='plus-circle' style={styles.icon2}></FeatherIcon>
      </View>
      <Text style={styles.sMTWTFS}>S M T W T F S</Text>
      <Text style={styles.sMtwtfs2}>3456789</Text>
      <MaterialCommunityIconsIcon
        name='toggle-switch'
        style={styles.icon5}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,14,14,1)",
  },
  rect: {
    width: 375,
    height: 505,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 50,
    marginTop: 307,
  },
  helloDoctor: {
    // fontFamily: "roboto-regular",
    color: "#121212",
  },
  helloDoctor1: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7,
  },
  helloDoctorColumn: {
    width: 163,
    marginBottom: 7,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginLeft: 136,
  },
  helloDoctorColumnRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 25,
    marginRight: 11,
  },
  ellipse2: {
    width: 20,
    height: 20,
  },
  rect5: {
    width: 5,
    height: 90,
    backgroundColor: "rgba(206,93,34,1)",
    marginTop: 5,
    marginLeft: 7,
  },
  ellipse: {
    width: 10,
    height: 10,
    marginTop: 8,
    marginLeft: 5,
  },
  rect6: {
    width: 5,
    height: 80,
    backgroundColor: "rgba(206,93,34,1)",
    marginTop: 7,
    marginLeft: 7,
  },
  ellipse1: {
    width: 10,
    height: 10,
    marginTop: 8,
    marginLeft: 5,
  },
  rect7: {
    width: 5,
    height: 50,
    backgroundColor: "rgba(206,93,34,1)",
    marginTop: 7,
    marginLeft: 7,
  },
  ellipse2Column: {
    width: 20,
    marginTop: 8,
  },
  rect4: {
    width: 277,
    height: 100,
    backgroundColor: "rgba(12,11,11,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 20,
  },
  image2: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  barryAllen: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    letterSpacing: 2,
    marginLeft: 4,
  },
  fever: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 4,
    marginLeft: 4,
  },
  loremIpsum: {
    // fontFamily: "roboto-regular",
    color: "rgba(206,93,34,1)",
    fontSize: 18,
    marginTop: 4,
  },
  barryAllenColumn: {
    width: 140,
    marginLeft: 14,
  },
  image2Row: {
    height: 77,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 16,
    marginRight: 32,
  },
  rect3: {
    width: 277,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 20,
    marginTop: 14,
  },
  oliverQueen: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    letterSpacing: 1,
  },
  loremIpsum1: {
    // fontFamily: "roboto-regular",
    color: "rgba(206,93,34,1)",
    fontSize: 18,
    marginLeft: 47,
    marginTop: 1,
  },
  oliverQueenRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 17,
    marginRight: 20,
  },
  consultDiagnosis: {
    // fontFamily: "roboto-regular",
    color: "rgba(206,204,204,1)",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 19,
  },
  rect2: {
    width: 277,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 20,
    marginTop: 14,
  },
  lylaMicheals: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    letterSpacing: 1,
  },
  loremIpsum2: {
    // fontFamily: "roboto-regular",
    color: "rgba(206,93,34,1)",
    fontSize: 18,
    marginLeft: 54,
    marginTop: 1,
  },
  lylaMichealsRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 17,
    marginRight: 31,
  },
  consultDiagnosis1: {
    // fontFamily: "roboto-regular",
    color: "rgba(206,204,204,1)",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 19,
  },
  rect4Column: {
    width: 277,
    marginLeft: 28,
    marginBottom: 3,
  },
  ellipse2ColumnRow: {
    height: 303,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 31,
    marginRight: 19,
  },
  button: {
    top: 9,
    left: 0,
    width: 82,
    height: 29,
    position: "absolute",
    backgroundColor: "rgba(206,93,34,0.45)",
    borderRadius: 100,
  },
  home: {
    // fontFamily: "roboto-regular",
    color: "rgba(206,93,34,1)",
    marginTop: 7,
    marginLeft: 36,
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(206,93,34,1)",
    fontSize: 40,
    height: 44,
    width: 40,
  },
  buttonStack: {
    width: 82,
    height: 44,
    marginTop: 1,
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginLeft: 18,
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 33,
    marginLeft: 63,
    marginTop: 4,
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginLeft: 45,
    marginTop: 5,
  },
  buttonStackRow: {
    height: 51,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 30,
    marginRight: 24,
  },
  image: {
    width: 38,
    height: 36,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    marginTop: 12,
  },
  appointments: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 66,
    marginTop: 12,
  },
  icon: {
    color: "rgba(248,241,241,1)",
    fontSize: 40,
    marginLeft: 66,
  },
  imageRow: {
    height: 48,
    flexDirection: "row",
    marginTop: -769,
    marginLeft: 21,
    marginRight: 19,
  },
  may: {
    // fontFamily: "roboto-regular",
    color: "rgba(245,242,242,1)",
    fontSize: 20,
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 257,
  },
  mayRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 62,
    marginLeft: 21,
    marginRight: 19,
  },
  sMTWTFS: {
    // fontFamily: "roboto-regular",
    color: "rgba(247,246,246,1)",
    fontSize: 22,
    width: 334,
    height: 35,
    letterSpacing: 15,
    marginTop: 13,
    marginLeft: 25,
  },
  sMtwtfs2: {
    // fontFamily: "roboto-regular",
    color: "rgba(247,246,246,1)",
    fontSize: 22,
    width: 378,
    height: 36,
    letterSpacing: 38,
    marginTop: 5,
    marginLeft: 25,
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: -177,
    marginLeft: 175,
  },
});

export default Untitled;
