import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/Final_Logo_IIITL.png")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateBill")}
      >
        <Text>Create Bill</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 4,
    marginTop:8,
  },
});

export default Home;
