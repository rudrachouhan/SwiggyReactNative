import { View, SafeAreaView, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Hero from "../components/Hero";
import FoodTypes from "../components/FoodTypes";
import Quickies from "../components/Quickies";
import Buttons from "../components/Buttons";
import hotels from "../data/Hotels";
import Restaurant from "../components/Restaurant";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const data = hotels;

  return (
    <SafeAreaView>
      <ScrollView>
      <View className="flex-row justify-between items-center mt-12 mb-3 mx-3 p-2 rounded-2xl border">
        <TextInput placeholder="Search for food items or restaurants" />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      <Hero />
      <FoodTypes />
        <Quickies />
        <Buttons />
        {data.map((item, index) => (
        <Restaurant key={index} item={item} />
      ))}
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
