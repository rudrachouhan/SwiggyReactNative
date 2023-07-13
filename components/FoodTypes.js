import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const FoodTypes = () => {
  const types = [
    {
      id: "0",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
      name: "Biriyani",
    },
    {
      id: "1",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
      name: "Dessert",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
      name: "Burger",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
      name: "Salad",
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
      name: "Sandwiches",
    },
  ];

  return (
    <View className='mt-4 ml-2'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View key={index} className='mr-6'>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text className="text-center mt-2 font-medium">{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({});
