import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import GiaoDoaAn from "./component/GiaoDoAn";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import GiaoDoAn from "./component/GiaoDoAn";
import GiaoDoAnTK from "./component/GiaoDoAnTK";

import GiaoDoAnDH from "./component/GiaoDoAnDH";
import GiaoDoAnYT from "./component/GiaoDoAnYT";
import TrangChu from "./component/Trangchu";
import HoatDongTC from "./component/HoatDongTC";
import TaiKhoanTC from "./component/TaiKhoanTC";
import DoiUuDaiTC from "./component/DoiUuDaiTC";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const GiaoDoAnHeader = () => (
  <View style={{ backgroundColor: "#ffffff" }}>
    <TouchableOpacity onPress={() => navigation.navigate("TrangChuTap")}>
      <Image
        style={styles.image}
        source={require("./boAnh/back.png")}
      ></Image>
    </TouchableOpacity>
    <Text style={{ top: 8, left: 60, fontSize: 18, color: "gray" }}>
      Deliver to
    </Text>
    <Text
      style={{
        // width: 50,
        height: 20,
        top: 8,
        left: 60,
        fontSize: 18,
        fontWeight: "500",
      }}
    >
      your home.!!
    </Text>

    <TextInput
      style={{
        position: "absolute",
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        top: 63,
        width: 330,
        left: 25,
        paddingLeft: 10,
      }}
      placeholder="Search food"
    ></TextInput>
    <TouchableOpacity>
      <Image
        style={{
          position: "absolute",
          width: 16,
          height: 16,
          left: 295,
          top: -10,
        }}
        source={require("./boAnh/pencil.png")}
      ></Image>
    </TouchableOpacity>

    <TouchableOpacity>
      <Image
        style={{
          position: "absolute",
          width: 37,
          height: 37,
          left: 330,
          top: -40,
        }}
        source={require("./boAnh/faceMon.png")}
      ></Image>
    </TouchableOpacity>
  </View>
);

const GiaoDoAnTKHeader = () => (
  <View style={{ backgroundColor: "#ffffff" }}>
    <TextInput
      style={{
        position: "absolute",
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        top: 15,
        width: 310,
        left: 22,
        paddingLeft: 40,
        backgroundColor: "#f1f5f8",
      }}
      placeholder="What does your favorite food ?"
      // placeholderTextColor={"gray"}
    ></TextInput>
    <Image
      style={{
        position: "absolute",
        width: 23,
        height: 23,
        top: 23,
        left: 29,
      }}
      source={require("./boAnh/search.jpg")}
    ></Image>
    <TouchableOpacity>
      <Text
        style={{ position: "absolute", left: 340, top: 25, fontWeight: "700" }}
      >
        Cancel
      </Text>
    </TouchableOpacity>
  </View>
);
const GiaoDoAnTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        header: GiaoDoAnHeader,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/food.png")
                : require("./boAnh/food.png")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Food</Text>
        ),
      }}
      name="GiaoDoAn"
      component={GiaoDoAn}
    />
    <Tab.Screen
      options={{
        header: GiaoDoAnTKHeader,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/iconTK .jpg")
                : require("./boAnh/iconTK1.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Search</Text>
        ),
      }}
      name="GiaoDoAnTK"
      component={GiaoDoAnTK}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerTitle: "Your food",
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/iconDH.jpg")
                : require("./boAnh/iconDH1.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Your foods</Text>
        ),
      }}
      name="GiaoDoAnDH"
      component={GiaoDoAnDH}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerTitle: "Food is delicious",
        
        headerRight: () => (
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 22, height: 22, right: 15 }}
                source={require("./boAnh/nhahangyt.jpg")}
              ></Image>
            </TouchableOpacity>
          </View>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/iconYT.jpg")
                : require("./boAnh/iconYT1.jpg")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Love</Text>
        ),
      }}
      name="GiaoDoAnYT"
      component={GiaoDoAnYT}
    />
  </Tab.Navigator>
);
const TrangChuTap = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerShown: false,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/main.png")
                : require("./boAnh/main.png")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Main</Text>
        ),
      }}
      name="TrangChu"
      component={TrangChu}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnTKHeader,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/action.png")
                : require("./boAnh/action.png")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Actions</Text>
        ),
      }}
      name="HoatDongTC"
      component={HoatDongTC}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerTitle: "Thông báo",
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/thongBao.png")
                : require("./boAnh/thongBao.png")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Thông báo</Text>
        ),
      }}
      name="DoiUuDaiTC"
      component={DoiUuDaiTC}
    />
    <Tab.Screen
      options={{
        // header: GiaoDoAnHeader,
        headerTitle: "Tài khoản",
        headerRight: () => (
          <View>
            <TouchableOpacity>
              <Image
                style={{ width: 22, height: 22, right: 15 }}
                source={require("./boAnh/nhahangyt.jpg")}
              ></Image>
            </TouchableOpacity>
          </View>
        ),
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={
              focused
                ? require("./boAnh/account.png")
                : require("./boAnh/account.png")
            }
            style={{ width: size, height: size }}
          />
        ),
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? " black" : "gray" }}>Account</Text>
        ),
      }}
      name="GiaoDoAnYT"
      component={TaiKhoanTC}
    />
  </Tab.Navigator>
);

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="TrangChuTap"
          component={TrangChuTap}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TaiKhoanTC"
          component={TaiKhoanTC}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="GiaoDoAnTab"
          component={GiaoDoAnTab}
        />

        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="screen2"
          component={screen2}
        />
   
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 23,
    height: 23,
    top: 10,
    left: 25,
  },
  input: {
    position: "absolute",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    top: 63,
    width: 330,
    left: 25,
    paddingLeft: 10,
  },
});