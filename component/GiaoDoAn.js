//trang chính
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  PanResponder,
  SectionList,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
const Tab = createBottomTabNavigator();
import React, { useState } from "react";
import GiaoDoaAnTK from "./GiaoDoAnTK";
const data = [
  { iamge: require("../boAnh/dorayaki.jpg"), text: "Bánh Doraemon" },
  { iamge: require("../boAnh/cakeMon.jpg"), text: "Bánh kem Doraemon" },
  { iamge: require("../boAnh/cakeChocolateMon.jpg"), text: "Bánh socola Doraemon" },
  // Thêm các mục khác vào đây
];
const data1 = [
  {
    image1: require("../boAnh/comboPizza.png"),
    text1: "Combo pizza",
    image2: require("../boAnh/icon9.jpg"),
   
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 80k",
    image4: require("../boAnh/star.png"),
    text3: "49(487)",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/comboHotDog.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "HotDog",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Giảm 50%",
    image4: require("../boAnh/star.png"),
    text3: "5(47)",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/comboRamen.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Highlands Coffee  ",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Mì ramen",
    image4: require("../boAnh/star.png"),
    text3: "49(487)",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
];
const data6 = [
  {
    image1: require("../boAnh/sausageGerman.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Xúc xích Đức",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 330K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/spaghetti.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Mì Ý",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Giảm 50%",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 50K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/beefFrench.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Bò bít tết Pháp",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 30K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/beefPotato.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Bò khoai tây",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 20K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/beefPotato2.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Bò khoai tây sốt",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 330K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/burgerGiant.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Burger khổng lồ",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Giảm 50%",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 50K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/sausageItaly.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Xúc xích Ý ",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 30K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/valenciaRice.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Cơm Valencia",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 20K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/sausageChorizo.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Xúc xích chorizo",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 330K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/patatasBravas.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Patatas Bravas",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Giảm 50%",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 50K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/albondigas.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Thịt viên Albondigas",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 30K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/risotto.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Risotto ",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 20K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/ribollita.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Ribollita",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 330K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/shepherd.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Bánh Shepherd",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Giảm 50%",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 50K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/piri.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Gà Piri-Piri",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 30K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/trungCaNga.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Trứng cá đen Nga",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/giamgia.jpg"),
    text3: "Giảm 20K",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },

  // Thêm các mục khác vào đây
];
const data2 = [
  {
    image1: require("../boAnh/comboMilkTea1.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Trà sữa thạch dâu",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/star.png"),
    text3: "Giảm 20k",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/comboMilkTea2.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Ăn vặt trà sữa",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Giảm 50%",
    image4: require("../boAnh/star.png"),
    text3: "Giảm 30k",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
  {
    image1: require("../boAnh/comboMilkTea3.jpg"),
    image2: require("../boAnh/icon9.jpg"),
    text1: "Trà sữa max",
    image3: require("../boAnh/icon10.jpg"),
    text2: "Ưu đãi 95K",
    image4: require("../boAnh/star.png"),
    text3: "Giảm 10k",
    image5: require("../boAnh/address.jpg"),
    text4: "0.7km",
  },
];
const data3 = [
  {
    iamge: require("../boAnh/kimBap.jpg"),
    text: "Kim-Bap",
  },
  { iamge: require("../boAnh/noodlesKorea.jpg"), text: "Mì cay" },
  {
    iamge: require("../boAnh/udon.jpg"),
    text: "Mì udon",
  },
  { iamge: require("../boAnh/brand4.jpg"), text: "Quán tài ký" },
  { iamge: require("../boAnh/brand5.jpg"), text: "Gà ủ muối" },

  // Thêm các mục khác vào đây
];
const data4 = [
  {
    iamge: require("../boAnh/hamburger.png"),
    text: "Hamburger",
  },
  {
    iamge: require("../boAnh/chickenFried.png"),
    text: "Fried Chicken",
  },
  {
    iamge: require("../boAnh/rice.png"),
    text: "Rice",
  },
  {
    iamge: require("../boAnh/milktea.png"),
    text: "Milk-tea",
  },

  // Thêm các mục khác vào đây
];
const data5 = [
  {
    iamge: require("../boAnh/hotdog.png"),
    text: "Hot dog",
  },
  {
    iamge: require("../boAnh/sandwich.png"),
    text: "Sandwich",
  },
  {
    iamge: require("../boAnh/noodles.png"),
    text: "Noodles",
  },
  {
    iamge: require("../boAnh/sushi.png"),
    text: "Sushi",
  },

  // Thêm các mục khác vào đây
];
export default function GiaoDoAn() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../boAnh/back.png")}
      ></Image>

      <ScrollView
        style={{ position: "absolute", width: "100%", top: 80, height: "100%" }}
      >
        <Image
          style={{
            position: "absolute",
            width: "100%",
            height: 150,
            top: 0,
            resizeMode: "cover",
          }}
          source={require("../boAnh/xeCongNghe.png")}
        ></Image>
        <FlatList
          style={{ position: "absolute", top: 170 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data4}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    margin: 15,
                    resizeMode: "center",
                    left: 16,
                  }}
                  source={item.iamge}
                ></Image>
                <Text textAlign="center" style={{ left: 30, width: 90 }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <FlatList
          style={{ position: "absolute", top: 300 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data5}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    margin: 15,
                    resizeMode: "center",
                    left: 16,
                  }}
                  source={item.iamge}
                ></Image>
                <Text style={{ left: 30 }}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TouchableOpacity
          style={{ position: "absolute", top: 450, alignSelf: "center" }}
        >
          <Image
            style={{ width: 350, height: 100, borderRadius: 5 }}
            source={require("../boAnh/doraemonLetter.jpg")}
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 530,
            backgroundColor: "#f2f3f5",
            
          }}
        ></View>
       
        <Text
          style={{
            position: "absolute",
            top: 570,
            left: 15,
            fontWeight: "700",
            fontSize: 19,
          }}
        >
          Combo Doraemon
        </Text>
        <FlatList
          style={{ top: 615, left: -60, width: "150%" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 180,
                    height: 180,
                    margin: 7,
                  }}
                  source={item.iamge}
                ></Image>
                <Text style={{ fontSize: 15, fontWeight: "700", left: 30 }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 860,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <TouchableOpacity style={{ position: "absolute", top: 890, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../boAnh/phaohoa.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Mừng sinh nhật 
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 175,
              resizeMode: "center",
            }}
            source={require("../boAnh/phaohoa1.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -1,
              color: "gray",
            }}
          >
            Ưu đãi 1 tuần
          </Text>
        </TouchableOpacity>
        {/* list ngay doc than  */}
        <FlatList
          style={{ position: "absolute", top: 945, left: -50 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 140,
                    height: 140,
                    margin: 7,
                    borderRadius: 10,
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
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: -20,
                    width: 100,
                  }}
                >
                  {item.text1} "..."
                </Text>

                <Image
                  style={{
                    width: 17,
                    height: 17,
                    left: 20,
                    top: -15,
                    borderRadius: 10,
                  }}
                  source={item.image3}
                ></Image>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 40,
                    top: -35,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -30,
                    borderRadius: 10,
                  }}
                  source={item.image4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 80,
                    top: 200,
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
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text4}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        {/* thang ngang */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 1190,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        {/* nang luong h chieu */}
        <TouchableOpacity style={{ position: "absolute", top: 1220, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../boAnh/hand.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Thức uống ngon
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 185,
              resizeMode: "center",
            }}
            source={require("../boAnh/happy.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -0,
              color: "gray",
            }}
          >
            Dành cho các tín đồ Tà Tữa
          </Text>
        </TouchableOpacity>
        {/*  list nang luong h chieu */}
        <FlatList
          style={{ position: "absolute", top: 1275, left: -10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 140,
                    height: 140,
                    margin: 7,
                    borderRadius: 10,
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
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: -20,
                    width: 100,
                  }}
                >
                  {item.text1} "..."
                </Text>

                <Image
                  style={{
                    width: 17,
                    height: 17,
                    left: 20,
                    top: -15,
                    borderRadius: 10,
                  }}
                  source={item.image3}
                ></Image>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 40,
                    top: -35,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -30,
                    borderRadius: 10,
                  }}
                  source={item.image4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 80,
                    top: 200,
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
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text4}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        {/* thang nagng */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 1525,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        {/* deal thuong hieu lon */}
        <TouchableOpacity style={{ position: "absolute", top: 1560, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../boAnh/gift.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Món ăn Hàn-Nhật
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 185,
              resizeMode: "center",
            }}
            source={require("../boAnh/gift1.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -0,
              color: "gray",
            }}
          >
            Đậm phong cách Hàn-Nhật
          </Text>
        </TouchableOpacity>
        <FlatList
          style={{ position: "absolute", top: 1640, left: -50 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data3}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 7,
                  }}
                  source={item.iamge}
                ></Image>
                <Text
                  numberOfLines={2}
                  textAlign="center"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    width: 90,
                    left: 20,
                    fontWeight: "700",
                    fontSize: 15,
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        {/* mon ngon cho ngay vui */}
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 1820,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <TouchableOpacity style={{ position: "absolute", top: 1855, left: 15 }}>
          <Image
            style={{
              position: "absolute",
              width: 21,
              height: 21,
            }}
            source={require("../boAnh/hand.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              fontWeight: "700",
              fontSize: 19,
              letterSpacing: -1,
            }}
          >
            Món ngon cho ngày vui
          </Text>
          <Image
            style={{
              position: "absolute",
              width: 80,
              height: 23,
              left: 205,
              resizeMode: "center",
            }}
            source={require("../boAnh/happy.jpg")}
          ></Image>
          <Text
            style={{
              // position: "absolute",
              top: -1,
              left: 25,
              // fontWeight: "700",
              fontSize: 15,
              letterSpacing: -0,
              color: "gray",
            }}
          >
            Deal chồng Freeship. Duy nhất 13:00 -16:59
          </Text>
        </TouchableOpacity>
        {/*  list nang luong h chieu */}
        <FlatList
          style={{ position: "absolute", top: 1905, left: -60 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          // numColumns={2} // Đặt số cột là 2
          data={data2}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 140,
                    height: 140,
                    margin: 7,
                    borderRadius: 10,
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
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: -20,
                    width: 100,
                  }}
                >
                  {item.text1} "..."
                </Text>

                <Image
                  style={{
                    width: 17,
                    height: 17,
                    left: 20,
                    top: -15,
                    borderRadius: 10,
                  }}
                  source={item.image3}
                ></Image>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "640",
                    left: 40,
                    top: -35,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    left: 10,
                    top: -30,
                    borderRadius: 10,
                  }}
                  source={item.image4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 30,
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 15,
                    height: 15,
                    left: 80,
                    top: 200,
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
                    top: 199,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text4}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 2150,
            backgroundColor: "#f2f3f5",
            // backgroundColor: "black",
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            width: "100%",
            height: 25,
            top: 2180,
            fontSize: 20,
            fontWeight: "700",
            // backgroundColor: "#f2f3f5",
          }}
        >
          Món châu âu
        </Text>

        <FlatList
          style={{ position: "absolute", top: 2220, width: "100%" }}
          data={data6}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ width: "100%" }}>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 7,

                    borderRadius: 10,
                  }}
                  source={item.image1}
                ></Image>
                <Image
                  style={{
                    position: "absolute",
                    width: 22,
                    height: 22,
                    left: 120,
                    top: 12,
                    borderRadius: 10,
                  }}
                  source={item.image2}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 16,
                    fontWeight: "700",
                    left: 147,
                    top: 10,
                    width: 250,
                  }}
                >
                  {item.text1}
                </Text>

                <Image
                  style={{
                    position: "absolute",
                    width: 17,
                    height: 17,
                    left: 122,
                    top: 80,
                    borderRadius: 10,
                  }}
                  source={item.image3}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 144,
                    top: 79,
                    width: 100,
                    color: "#f05f27",
                  }}
                >
                  {item.text2}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 17,
                    height: 17,
                    left: 220,
                    top: 55,
                    borderRadius: 10,
                  }}
                  source={item.image4}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 14,
                    fontWeight: "640",
                    left: 250,
                    top: 54,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text3}
                </Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    left: 133,
                    top: 54,
                    borderRadius: 10,
                  }}
                  source={item.image5}
                ></Image>
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 16,
                    fontWeight: "700",
                    left: 155,
                    top: 52,
                    width: 100,
                    color: "#545454",
                  }}
                >
                  {item.text4}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        {/* <View
          style={{
            position: "absolute",
            width: "100%",
            height: 15,
            top: 2820,
            // backgroundColor: "#f2f3f5",
            backgroundColor: "black",
          }}
        ></View> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
