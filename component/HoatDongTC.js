//Hoạt đội
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function HoatDongTC({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", width: 200, height: 200, top: 110 }}
        source={require("../boAnh/actionIcon.png")}
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
        Chưa có hoạt động nào.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("GiaoDoAn")}
        style={{
          top: 400,
          position: "absolute",
          width: 150,
          height: 35,
          backgroundColor: "red",
          alignContent: "center",
          justifyContent: "center",
          // borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "700", textAlign: "center" }}>
          Xem chi tiết
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
