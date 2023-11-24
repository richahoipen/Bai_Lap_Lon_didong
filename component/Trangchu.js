import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native";

const data = [
  {
    image: require("../boAnh/buy.png"),
    text: "Mua đồ ăn",
    id: 1,
  },
  { image: require("../boAnh/uudai.png"), text: "Ưu đãi" },
  { image: require("../boAnh/blackfriday.png"), text: "Black Friday" },
  { image: require("../boAnh/xmas.png"), text: "Giáng sinh" },
];
const dataOther=[
  {
    image: require("../boAnh/cakeBirthday.png"),
    text: "Sinh nhật",
    id: 1,
  },
  { image: require("../boAnh/valentine.jpg"), text: "Valentine" },
  { image: require("../boAnh/tet.png"), text: "Tết nguyên đán" },
  { image: require("../boAnh/may1.jpg"), text: "Quốc tế lao động" },
];

const data2 = [
  {
    image1: require("../boAnh/trasuadoraemon.jpg"),
    image2: require("../boAnh/trasuadoraemon.jpg"),
    text1: "Trà sữa \nDoraemon",
    image5: require("../boAnh/star.png"),
    text4: "5.0",
    image4: require("../boAnh/address.jpg"),
    text3: "0.7km",
  },
];

var data3 = [
  { image: require("../boAnh/20phantram.png") },
  { image: require("../boAnh/30phantram.jpg") },
  { image: require("../boAnh/40phantram.jpg") },
  { image: require("../boAnh/thucthach1.jpg") },
  { image: require("../boAnh/goihoivien1.jpg") },
];
var data4 = [
  { image: require("../boAnh/xeCongNghe.png") },
];
const data5 = [
  { image: require("../boAnh/mocKhoaMon.jpg"), text: "Móc khóa Doraemon" },
  { image: require("../boAnh/mocKhoaNobita.jpg"), text: "Móc khóa Nobita" },
  { image: require("../boAnh/mocKhoaHaiMon.jpg"), text: "Cặp Doraemon" },
];

const data6 = [
  {
    image: require("../boAnh/london.jpg"),
    text1: "London-England",
    text2: "130 USD",
    text3: "Cơ hội nhận ngay",
  },

  {
    image: require("../boAnh/munich.jpg"),
    text1: "Munich-Germany",
    text2: "140 USD",
    text3: "Cơ hội nhận ngay",
  },

  {
    image: require("../boAnh/manchester.jpg"),
    text1: "Manchester-England",
    text2: "135 USD",
    text3: "Cơ hội nhận ngay",
  },
  {
    image: require("../boAnh/moscow.jpg"),
    text1: "Moscow-Russia",
    text2: "150 USD",
    text3: "Cơ hội nhận ngay",
  },
  {
    image: require("../boAnh/berlin.jpg"),
    text1: "Berlin-Germany",
    text2: "200 USD",
    text3: "Cơ hội nhận ngay",
  },
];
const data7 = [
  {
    image: require("../boAnh/dubai.jpg"),
    text1: "Dubai-UAE",
    text2: "200 USD",
    text3: "Cơ hội nhận ngay",
  },

  {
    image: require("../boAnh/doha.jpg"),
    text1: "Doha-Qatar",
    text2: "200 USD",
    text3: "Cơ hội nhận ngay",
  },

  {
    image: require("../boAnh/tokyo.jpg"),
    text1: "Tokyo-Japan",
    text2: "200 USD",
    text3: "Cơ hội nhận ngay",
  },
  {
    image: require("../boAnh/melbourne.jpg"),
    text1: "Melbourne-Australia",
    text2: "200 USD",
    text3: "Cơ hội nhận ngay",
  },
  {
    image: require("../boAnh/beijing.jpg"),
    text1: "Beijing-China",
    text2: "200 USD",
    text3: "Cơ hội nhận ngay",
  },
];
export default function TrangChu({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <LinearGradient
          colors={["#00FFFF", "#fff2a3"]}
          style={{
            position: "absolute",
            width: "100%",
            height: 100,
            top: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              position: "absolute",
              left: 20,
              top: 30,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Cửa hàng món ăn XÊ-KO
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              position: "absolute",
              top: 30,
              right: 10,
            }}
          >
            <Image
              style={{
                width: 53,
                height: 30,
                resizeMode: "cover",
              }}
              source={require("../boAnh/suneo.png")}
            ></Image>
          </TouchableOpacity>
        </LinearGradient>
        <TextInput
          style={{
            position: "absolute",
            width: "90%",
            height: 50,
            top: 75,
            backgroundColor: "white",
            borderRadius: 5,
            paddingLeft: 55,
            alignSelf: "center",
          }}
          placeholder="Món ăn yêu thích của bạn"
          placeholderTextColor={"gray"}
        ></TextInput>
        <Image
          style={{
            position: "absolute",
            width: 26,
            height: 26,
            top: 86,
            left: 35,
            //   resizeMode: "ceover",
          }}
          source={require("../boAnh/search-interface-symbol.png")}
        ></Image>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ position: "absolute", top: 150, width: "100%" }}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                left: 10,
                alignItems: "center",

                width: 85,
                height: 100,
              }}
              onPress={() => {
                if (item.text == "Mua đồ ăn") {
                  navigation.navigate("GiaoDoAnTab");

                  console.log("Đã nhấn vào laptrinh");
                } else {
                  // Thực hiện hành động khác khi item.text không phải "laptrinh"
                  console.log("Đã nhấn vào một giá trị khác");
                }
              }}
            >
              <Image
                style={{
                  // position: "absolute",
                  width: 50,
                  height: 50,
                  marginBottom: 15,
                }}
                source={item.image}
              ></Image>
              <View style={{ alignContent: "center" }}>
                <Text>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ position: "absolute", top: 280, width: "100%" }}
          data={dataOther}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                left: 10,
                alignItems: "center",

                width: 85,
                height: 100,
              }}
            >
              <Image
                style={{
                  // position: "absolute",
                  width: 50,
                  height: 50,
                  marginBottom: 15,
                }}
                source={item.image}
              ></Image>
              <View style={{ alignContent: "center" }}>
                <Text>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 400,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            Giảm giá ưu đãi{""}
          </Text>
          <Image
            style={{
              position: "absolute ",
              width: 11,
              height: 11,
              left: 195,
              top: 10,
            }}
            source={require("../boAnh/Vector.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 10,
            top: 592,
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              position: "absolute ",
              width: 150,
              height: 282,
              left: 0,

              resizeMode: "cover",
            }}
            source={require("../boAnh/combofood.jpg")}
          ></Image>
        </TouchableOpacity>
        <FlatList
          style={{
            position: "absolute",
            top: 451,
            left: 150,
            height: 281,
            backgroundColor: "#008000",
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  height: 250,
                  borderRadius: 7,
                  top: 10,
                  marginLeft: 14,
                }}
              >
                <Image
                  style={{
                    width: 140,
                    height: 170,

                    borderRadius: 10,
                    marginBottom: 7,
                    // resizeMode: "center",
                  }}
                  source={item.image1}
                ></Image>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    borderRadius: 10,
                  }}
                  source={item.image2}
                ></Image>
                <Text
                  // numberOfLines={2}
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 32,
                    top: -20,
                    width: 120,
                    // height: 100,
                  }}
                >
                  {item.text1}
                </Text>

                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -20,
                    borderRadius: 10,
                  }}
                  source={item.image4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 35,
                    top: 217,
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    left: 80,
                    top: 217,
                    borderRadius: 10,
                  }}
                  source={item.image5}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 100,
                    top: 217,
                    width: 100,
                    color: "#00FFFF",
                  }}
                >
                  {item.text4}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        <Text
          style={{
            position: "absolute",
            top: 770,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Ưu đãi khác
        </Text>
        <FlatList
          horizontal
          style={{ position: "absolute", top: 810, left: 10 }}
          data={data3}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                style={{ width: 130, height: 130 }}
                source={item.image}
              ></Image>
            </TouchableOpacity>
          )}
        ></FlatList>

        <TouchableOpacity
          style={{
            position: "absolute",
            width: "100%",
            // height: 150,
            top: 980,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 150,

              resizeMode: "cover",
            }}
            source={require("../boAnh/shopee.jpg")}
          ></Image>
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",

            top: 1150,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Grab, Gojex, Baemin, Now food
        </Text>
        <FlatList
          horizontal
          style={{ position: "absolute", top: 1190 }}
          data={data4}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                style={{
                  width: 300,
                  height: 100,
                  borderRadius: 7,
                  marginLeft: 10,
                }}
                source={item.image}
              ></Image>
            </TouchableOpacity>
          )}
        ></FlatList>
        <Text
          style={{
            position: "absolute",

            top: 1320,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Quà tặng kèm của Xê-Ko
        </Text>

        <FlatList
          style={{ position: "absolute", top: 1350, width: "150%" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data5}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    margin: 7,
                  }}
                  source={item.image}
                ></Image>
                <View style={{ alignSelf: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        <Text
          style={{
            position: "absolute",

            top: 1560,
            left: 10,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Cơ hội trúng thưởng du lịch:
        </Text>

        <FlatList
          style={{
            position: "absolute",
            top: 1590,
            width: "50%",
          }}
          showsHorizontalScrollIndicator={false}
          data={data6}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginBottom: 20,
                borderRadius: 7,
                height: 280,
                borderWidth: 1,
                borderColor: "gray",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 160, borderRadius: 7 }}
                source={item.image}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  fontSize: 17,
                  fontWeight: "600",
                  top: 170,
                  left: 10,
                  height: 30,
                }}
              >
                {item.text1}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  // width: "90%",
                  color: "#1a6cea",
                  backgroundColor: "#FF0000",

                  top: 230,
                  left: 10,
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  color: "gray",
                  top: 250,
                  left: 10,
                }}
              >
                {item.text3}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>
        <FlatList
          style={{
            position: "absolute",
            top: 1590,
            width: "50%",
            left: "50%",
          }}
          showsVerticalScrollIndicator={false}
          data={data7}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginBottom: 20,
                borderRadius: 7,
                height: 280,
                borderWidth: 1,
                borderColor: "gray",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 160, borderRadius: 7 }}
                source={item.image}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  fontSize: 17,
                  fontWeight: "600",
                  top: 170,
                  left: 10,
                  height: 30,
                }}
              >
                {item.text1}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  // width: "90%",
                  top: 230,
                  left: 10,
                  color: "#1a6cea",
                  backgroundColor: "#c8e5fd",
                }}
              >
                {item.text2}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  width: "90%",
                  color: "gray",
                  top: 250,
                  left: 10,
                }}
              >
                {item.text3}
              </Text>
            </TouchableOpacity>
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
