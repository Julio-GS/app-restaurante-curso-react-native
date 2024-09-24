import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function WelcomeSection() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "#EDEFEE",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <ScrollView indicatorStyle="white">
        <Text
          style={{
            fontSize: 50,
            padding: 20,
            marginVertical: 8,
            color: "#EDEFEE",
            textAlign: "center",
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}
