import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.tittleText}>
        Welcome to
        <Text style={headerStyles.textBold}> Little Lemon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
  },
  tittleText: {
    paddingTop: 40,
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
    color: "black",
    marginTop: 10,
  },
  textBold: {
    fontWeight: "bold",
  },
});
