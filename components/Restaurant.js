import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Restaurant = ({ item }) => {

  const navigation = useNavigation();

  return (
    <View className="my-6 ml-3">
      <Pressable onPress={() => navigation.navigate('Hotel')} >
        <View className="flex-row">
          <ImageBackground
            source={{ uri: item.image }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            imageStyle={{ borderRadius: 6 }}
          >
            <AntDesign
              name="hearto"
              size={24}
              color="white"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: 28,
                fontWeight: "900",
                color: "white",
              }}
            />
          </ImageBackground>
          <View>
            <Text className="text-lg font-semibold ml-3 mb-2">{item.name}</Text>
            <View className="flex-row items-center ml-3">
              <MaterialIcons name="stars" size={24} color="green" />
              <Text className="mr-2 ml-1">{item.rating}</Text>
              <Text className="mr-2"></Text>
              <Text>{item.time}mins</Text>
            </View>
            <Text className="ml-3 mt-1 text-gray-500 text-base">
              {item.adress}
            </Text>
            <View className="ml-3 mt-2 flex-row items-center">
              <FontAwesome name="rupee" size={20} color="green" />
              <Text className="ml-1 text-lg">{item.cost_for_two} for two</Text>
            </View>
            <View className="flex-row items-center mt-2 ml-3">
              <MaterialIcons name="delivery-dining" size={24} color="black" />
              <Text className="ml-2 text-base">FREE Delivery</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Restaurant;
