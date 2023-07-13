import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import Quicky from "../data/Quickies";
import { MaterialIcons } from '@expo/vector-icons';

const Quickies = () => {
  const data = Quicky;

  return (
    <View className="mt-4">
      <Text className="ml-2 text-lg font-medium mb-2">Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='ml-2'>
        {data.map((item, index) => (
          <Pressable key={index} className='mr-4'>
            <ImageBackground
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 32,
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.offer}OFF
              </Text>
                </ImageBackground>
                <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>{item.name}</Text>
                <View className='flex-row items-center mt-1'>
                    <MaterialIcons name="stars" size={24} color="green" />
                    <Text className='mr-2 ml-1'>{item.rating}</Text>
                    <Text className='mr-2'></Text>
                    <Text>{item.time}mins</Text>
                </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Quickies;
