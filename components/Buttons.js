import { View, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";


const Buttons = () => {
    
  return (
    <View className="mt-4 flex-row">
      <Pressable className="flex-row justify-center items-center border-2 rounded-xl border-gray-300 w-[31%] mr-2 ml-2 p-1">
        <Text className="mr-2 text-base text-center">Filter</Text>
        <AntDesign name="filter" size={20} color="black" />
      </Pressable>
      <Pressable className="flex-row justify-center items-center border-2 rounded-xl border-gray-300 w-[31%] mr-2 p-1">
        <Text>Sort by Rating</Text>
      </Pressable>
      <Pressable className="flex-row justify-center items-center border-2 rounded-xl border-gray-300 w-[31%] p-1">
        <Text>Sort by Price</Text>
      </Pressable>

      
    </View>
  );
};

export default Buttons;
