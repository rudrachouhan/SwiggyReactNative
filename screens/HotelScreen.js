import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

const HotelScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  console.log(cart);
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View
            className="bg-[#B0C4DE]"
            style={{
              height: 310,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          >
            <View className="flex-row justify-between items-center ml-3 mt-2">
              <Ionicons
                onPress={() => navigation.goBack()}
                name="ios-arrow-back-circle"
                size={32}
                color="green"
              />
              <View className="flex-row items-center mr-3">
                <AntDesign name="search1" size={20} color="black" />
                <Text
                  style={{ fontSize: 16, fontWeight: "600", marginLeft: 6 }}
                >
                  Search
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: 225,
                marginHorizontal: 20,
                marginVertical: 5,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                  {route.params.name}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    style={{ marginRight: 7 }}
                    name="share"
                    size={24}
                    color="black"
                  />
                  <AntDesign name="hearto" size={24} color="black" />
                </View>
              </View>
              <View className="flex-row items-center mt-1">
                <MaterialIcons name="stars" size={28} color="green" />
                <Text className="mr-2 ml-1 text-base">
                  {route.params.rating}
                </Text>
                <Text className="mr-1 text-base">•</Text>
                <Text className="text-base">{route.params.time}mins</Text>
              </View>
              <Text style={{ marginTop: 5, color: "gray", fontSize: 17 }}>
                {route.params.cuisines}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Outlet</Text>
                <Text style={{ marginLeft: 15, color: "gray" }}>
                  {route.params.adress}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  30 mins
                </Text>
                <Text style={{ marginLeft: 15, color: "gray" }}>Home</Text>
              </View>

              <Text
                style={{
                  borderColor: "gray",
                  borderWidth: 0.6,
                  height: 1,
                  marginTop: 12,
                }}
              />

              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="delivery-dining" size={30} color="black" />
                <View
                  style={{
                    marginTop: 2,
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 6,
                  }}
                >
                  <Text className="text-gray-400 text-base mx-1 text-center">
                    0 - 3 Kms
                  </Text>
                  <Text className="text-gray-400 text-base mx-1 text-center">
                    |
                  </Text>
                  <Text className="text-gray-400 text-base mx-1 text-center">
                    FREE Delivery
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 17,
              fontWeight: "500",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            MENU
          </Text>
          <Text
            style={{
              borderColor: "gray",
              borderWidth: 0.6,
              height: 1,
              marginTop: 12,
            }}
          />

          {route.params.menu.map((item, id) => (
            <FoodItem item={item} key={id} />
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#00A877",
            width: "90%",
            padding: 13,
            margin: "auto",
            marginBottom: 30,
            position: "absolute",
            left: 20,
            bottom: 10,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                {cart.length} items | ₹ {total}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginTop: 3,
                  color: "white",
                }}
              >
                Extra Charges may Apply!
              </Text>
            </View>
            <Pressable
              onPress={() =>
                navigation.navigate("Cart", { name: route.params.name })
              }
            >
              <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
                View Cart
              </Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default HotelScreen;
