import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../store/CartReducer";

const Specialities = ({ food }) => {
  const dispatch = useDispatch();
  const [addItems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{food.name}</Text>
          <Text>{food.price}</Text>
          <Text style={{ marginTop: 5, borderRadius: 4 }}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                style={{ paddingHorizontal: 3 }}
                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                size={15}
                color="#FFD700"
                key={i}
              />
            ))}
          </Text>
          <Text
            style={{ width: 180, marginTop: 8, color: "gray", fontSize: 16 }}
          >
            {food.description.length > 30
              ? food.description.substr(0, 35) + "..."
              : food.description}
          </Text>
        </View>
        <Pressable>
          <Image
            style={{ width: 120, height: 120, borderRadius: 8 }}
            source={{ uri: food.image }}
          />
          {selected ? (
            <View
              style={{
                position: "absolute",
                top: 90,
                left: 20,
                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
                gap: 8,
              }}
            >
              <Pressable onPress={() => {
                if (addItems === 1) {
                  setSelected(false);
                  setAddItems(0);
                  dispatch(removeFromCart(food));
                }
                else {
                  setAddItems((c) => c - 1);
                  dispatch(decrementQuantity(food));
                }
              }}>
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#018749" }}
              >
                -
              </Text>
              </Pressable>
              <Pressable>
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#018749" }}
              >
                {addItems}
              </Text>
              </Pressable>
              <Pressable onPress={() => {
                setAddItems((c) => c + 1);
                dispatch(incrementQuantity(food));
              }}>
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#018749" }}
              >
                +
              </Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (addItems == 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(food));
              }}
              style={{
                position: "absolute",
                top: 90,
                left: 20,
                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#018749" }}
              >
                ADD
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default Specialities;
