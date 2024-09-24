import { StyleSheet, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./components/LoginForm";
export default function App() {
  return (
    <>
      <View style={appStyles.container}>
        <LittleLemonHeader />
        {/* <WelcomeSection /> */}
        {/* <MenuItems /> */}
        {/* <FeedbackForm /> */}
        <LoginScreen />
      </View>

      {/* <View style={{ backgroundColor: "#495E57" }}>
        <Footer />
      </View> */}
    </>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
