//tab3
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GiaoDoAnDH({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: 10,
          top: 0,
          backgroundColor: "#f2f3f5",
        }}
      ></View>

      <Image
        style={{ position: "absolute", width: '100%', height: 250, top: 10 }}
        source={require("../boAnh/doraemonAll.png")}
      ></Image>

      <Text
        style={{
          position: "absolute",
          fontSize: 15,
          fontWeight: "400",
          color: "#858e96",
          width: 300,
          textAlign: "center",
          top: 290,
        }}
      >
        Hãy đặt món ăn ủng hộ Xê-ko và nhóm bạn mèo Doraemon nhé. ^-^
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("GiaoDoAn")}
        style={{
          top: 350,
          position: "absolute",
          width: 150,
          height: 35,
          backgroundColor: "#00FF00",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "700", textAlign: "center" }}>Click vào đây</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
