import { View, Text } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Specialities from "./Specialities";

const FoodItem = ({ item }) => {
  const data = [item];
    const [selected, setSelected] = useState(["Recommended"]);
    const handleItemSelect = (item) => {
        const itemSelected = selected.find((c) => c === item);
        if (itemSelected) {
            setSelected(selected.filter((sel) => sel !== item));
        }
        else {
            setSelected([...selected, item]);
        }
    }

  return (
    <View>
      {data.map((item, index) => (
        <>
              <Pressable
                  onPress={() => handleItemSelect(item.name)}
            style={{
              margin: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={index}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {item.name} ({item.items.length})
            </Text>
            <AntDesign name="down" size={24} color="black" />
          </Pressable>

          {selected.includes(item.name)
            ? item.items.map((food, id) => (
                <Specialities food={food} key={id} />
              ))
            : null}
        </>
      ))}
    </View>
  );
};

export default FoodItem;
