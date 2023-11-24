import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
var data = [
  { image: require("../boAnh/spinPrize.png"), text: "Spin to win prizes" },
  { image: require("../boAnh/pointPresent.png"), text: "Point to presents" },
  {
    image: require("../boAnh/survey.png"),
    text: "Conduct a survey",
  },
  { image: require("../boAnh/wallet.png"), text: "Your wallet" },
  {
    image: require("../boAnh/present.jpg"),
    text: "Presents from Xê-Ko",
  },
];
var data1 = [
  { image: require("../boAnh/letter.png"), text: "Your letter"},
  {
    image: require("../boAnh/call.png"),
    text: "Call to me",
    image1: require("../boAnh/next.jpg"),
  },
  {
    image: require("../boAnh/setting.png"),
    text: "Setting",
    image1: require("../boAnh/next.jpg"),
  },
];

export default function TaiKhoanTC({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            width: "100%",
            height: 228,
            backgroundColor: "#FFFF00",
            alignItems: "center",
            top: 0,
          }}
        >
          <Image
            style={{ width: 100, height: 100, top: 10, marginBottom: 20 }}
            source={require("../boAnh/doraemonFace.png")}
          ></Image>
          <Text
            style={{
              position: "relative",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Từ Quang Nhật 
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 25,
              height: 25,
              top: 150,
              left: 120,
            }}
            source={require("../boAnh/star.png")}
          ></Image>
          <Text
            style={{
              position: "absolute",

              top: 151,
              left: 149,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            15 
          </Text>
          <Text
            style={{
              position: "absolute",

              top: 151,
              left: 169,
              fontSize: 18,
            }}
          >
            +84389094153
          </Text>

          <Image
            style={{ position: "absolute", width: 25, height: 25, bottom: 20 }}
            source={require("../boAnh/diamond.png")}
          ></Image>
        </TouchableOpacity>

        <View style={styles.container1}>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 10,
                resizeMode: "center",
              }}
              source={require("../boAnh/linkClip.png")}
            ></Image>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 200,
                resizeMode: "center",
              }}
              source={require("../boAnh/account.png")}
            ></Image>

            <Text style={{ left: 50 }}>Link others accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 10,
                resizeMode: "center",
              }}
              source={require("../boAnh/changeInfo.png")}
            ></Image>
            <Image
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                left: 350,
                resizeMode: "center",
              }}
              source={require("../boAnh/next.jpg")}
            ></Image>

            <Text style={{ left: 50 }}>Change Infomations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{
                position: "absolute",
                width: 25,
                height: 25,
                left: 10,
                resizeMode: "center",
              }}
              source={require("../boAnh/insurance.png")}
            ></Image>

            <Text style={{ left: 50 }}>Insurance</Text>
          </TouchableOpacity>
        </View>


        <FlatList
          style={{ position: "absolute", top: 420, height: 300, width: "100%" }}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                // position: "absolute",

                width: "100%",
                height: 50,
                backgroundColor: "#FFF", // Màu sắc của mỗi TouchableOpacity
                marginBottom: 3,
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  left: 10,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>

              <Text style={{ left: 50 }}>{item.text}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>

        <FlatList
          style={{ position: "absolute", top: 700, height: 200, width: "100%" }}
          data={data1}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                // position: "absolute",

                width: "100%",
                height: 50,
                backgroundColor: "#FFF", // Màu sắc của mỗi TouchableOpacity
                marginBottom: 3,
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  left: 10,
                  resizeMode: "center",
                }}
                source={item.image}
              ></Image>

              <Image
                style={{
                  position: "absolute",
                  width: 15,
                  height: 15,
                  left: 350,
                  resizeMode: "center",
                }}
                source={item.image1}
              ></Image>

              <Text style={{ left: 50 }}>{item.text}</Text>
            </TouchableOpacity>
          )}
        ></FlatList>
        <Text
          style={{ position: "absolute", top: 880, color: "gray", left: 20 }}
        >
          Phiên bản 2.6.50
        </Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f7",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // position: "absolute",
    top: 100,
    width: "100%",
    height: 50,
    backgroundColor: "#FFF", // Màu sắc của mỗi TouchableOpacity
    marginBottom: 10,
    justifyContent: "center",
  },
  container1: {
    position: "absolute",
    top: 140,
    flexDirection: "column", // Dòng chứa các View sẽ theo chiều ngang
    justifyContent: "space-between", // Các View sẽ nằm cách đều nhau
    width: "100%",
  },
});
