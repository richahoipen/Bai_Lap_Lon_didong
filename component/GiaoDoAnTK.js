import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
const data = [
  { image: require("../boAnh/cupCoffee.png"), text: "Cà phê" },
  { image: require("../boAnh/teaCup.png"), text: "trà" },
  { image: require("../boAnh/bread.png"), text: "Bánh Mì" },
  { image: require("../boAnh/vegan.png"), text: "Đồ chay" },
  { image: require("../boAnh/soup.png"), text: "Súp" },
  { image: require("../boAnh/seafood.png"), text: "Hải Sản" },
  { image: require("../boAnh/snackfood.png"), text: "Ăn Vặt" },
  { image: require("../boAnh/dessert.png"), text: "Tráng Miệng" },
];
const data1 = [
  { image: require("../boAnh/banhRan.png"), text: "Bánh rán" },
  {
    image: require("../boAnh/beer.png"),
    text: "Bia",
  },
  { image: require("../boAnh/wine.png"), text: "Rượu" },
  { image: require("../boAnh/coke.png"), text: "Nước ngọt" },
  { image: require("../boAnh/beefsteak.png"), text: "Bò bít tết" },
  { image: require("../boAnh/hotpot.png"), text: "Lẩu" },
  {
    image: require("../boAnh/fishfood.png"),
    text: "Cá",
  },
  {
    image: require("../boAnh/sushi2.png"),
    text: "Sushi",
  },
];

export default function GiaoDoAnTK() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <Image
          style={{
            // position: "absolute",
            width: "90%",
            height: 150,
            top: 50,
            alignSelf: "center",
            resizeMode: "center",
          }}
          source={require("../boAnh/doraemonImage.jpg")}
        ></Image>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 205,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            top: 250,
            fontWeight: "700",
            left: 20,
          }}
        >
          Các loại món ăn
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 290,
            left: 20,
            backgroundColor: "#ffefdc",
            width: 155,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>Bánh rán</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../boAnh/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 290,
            left: 180,
            backgroundColor: "#ffefdc",
            width: 90,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>Mì ramen</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../boAnh/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 330,
            left: 20,
            backgroundColor: "#ffefdc",
            width: 155,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>Bánh dưa lưới</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../boAnh/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",

            top: 330,
            left: 180,
            backgroundColor: "#ffefdc",
            width: 155,
            height: 30,
            paddingLeft: 30,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#FF0000" }}>Khoai lang nướng</Text>

          <Image
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: 5,
              resizeMode: "center",
            }}
            source={require("../boAnh/arrow.jpg")}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 380,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            top: 420,
            fontWeight: "700",
            left: 20,
          }}
        >
          Phân loại món ăn:
        </Text>
        <FlatList
          style={{ position: "absolute", top: 450, width: "50%" }}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                height: 65,

                borderTopWidth: 1,
                borderRightWidth: 1,
                borderRightColor: "blue",
                borderTopColor: "gray",

                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    width: 30,
                    height: 30,

                    left: 20,
                  }}
                  source={item.image}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    left: 60,
                    top: 5,
                    width: "65",
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <FlatList
          style={{ position: "absolute", top: 450, width: "50%", left: "50%" }}
          data={data1}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                height: 65,
                borderTopWidth: 1,
                borderTopColor: "gray",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    width: 30,
                    height: 30,

                    left: 20,
                  }}
                  source={item.image}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    left: 60,
                    top: 5,
                    width: "65",
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </ScrollView>

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
    // width: "100%",
  },
});
