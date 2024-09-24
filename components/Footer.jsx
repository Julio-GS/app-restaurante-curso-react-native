import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "black",
    fontStyle: "italic",
  },
});
