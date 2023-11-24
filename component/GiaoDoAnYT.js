
//thả tim
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function GiaoDoAnYT({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", width: 250, height: 200, top: 110 }}
        source={require("../boAnh/love.jpg")}
      ></Image>

      <Text
        style={{
          position: "absolute",
          fontSize: 15,
          fontWeight: "400",
          // color: "#858e96",
          width: 300,
          textAlign: "center",
          top: 320,
        }}
      >
        Dành trọn trái tim cho Xê-Ko nhé. ^-^
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("GiaoDoAn")}
        style={{
          top: 400,
          position: "absolute",
          width: 150,
          height: 35,
          backgroundColor: "pink",
          alignContent: "center",
          justifyContent: "center",
          // borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "700", textAlign: "center" }}>
          Thả tim
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f8",
    alignItems: "center",
    justifyContent: "center",
  },
});
