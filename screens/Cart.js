import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Pressable } from "react-native";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/CartReducer";
import { ScrollView } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Cart = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="mt-3 ml-3 flex-row items-center">
          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-arrow-back-circle"
            size={32}
            color="green"
          />
          <Text className="ml-3 text-lg font-medium">{route.params.name}</Text>
        </View>

        <View className="flex items-center">
          <View className="bg-white h-10 w-[90%] rounded-lg mt-2 p-2 flex-row justify-between items-center">
            <Text className="text-gray-600 text-xs">
              Ordering for Someone else ?
            </Text>
            <Text className="text-red-600 text-xs font-bold">Add Details</Text>
          </View>
        </View>

        <View className="mt-5 items-center flex">
          {cart.map((item, index) => (
            <View
              className="flex-row items-center justify-between bg-white w-[90%] px-4 py-2 rounded-md"
              key={index}
            >
              <Text className="text-base font-normal w-20">{item.name}</Text>
              <View className="flex-row justify-between items-center rounded-lg h-10 w-28 border-gray-500 border-2 px-1">
                <Pressable
                  onPress={() => {
                    dispatch(decrementQuantity(item));
                  }}
                >
                  <Text className="text-[#018749] text-3xl font-bold">-</Text>
                </Pressable>
                <Pressable>
                  <Text className="text-[#018749] text-lg font-bold">
                    {item.quantity}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    dispatch(incrementQuantity(item));
                  }}
                >
                  <Text className="text-[#018749] text-2xl font-bold">+</Text>
                </Pressable>
              </View>
              <Text className="text-base font-semibold">
                ₹ {item.quantity * item.price}
              </Text>
            </View>
          ))}
        </View>

        <View className="mt-4 ml-4">
          <Text className="text-base font-normal mb-3">
            Delivery Instructions
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row justify-between items-center">
              <View className="bg-white h-24 p-3 rounded-lg mr-3">
                <FontAwesome name="bell-o" size={24} color="gray" />
                <Text className="text-gray-500 w-20 mt-2">Avoid Ringing</Text>
              </View>
              <View className="bg-white h-24 p-3 rounded-lg mr-3">
                <FontAwesome5 name="door-open" size={24} color="gray" />
                <Text className="text-gray-500 w-20 mt-2">
                  Leave at the Door
                </Text>
              </View>
              <View className="bg-white h-24 p-3 rounded-lg mr-3">
                <FontAwesome5 name="directions" size={24} color="gray" />
                <Text className="text-gray-500 w-20 mt-2">
                  Directions to reach
                </Text>
              </View>
              <View className="bg-white h-24 p-3 rounded-lg">
                <FontAwesome name="phone" size={24} color="gray" />
                <Text className="text-gray-500 w-20 mt-2">Avoid Calling</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="mt-5 ml-3">
          <Text className="font-semibold text-sm">Billing Details</Text>
          <View className="bg-white p-3 mr-3 rounded-lg mt-2">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-400">Items Total</Text>
              <Text className="font-medium">₹ {total}</Text>
            </View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-400">Delivery Fee</Text>
              <Text className="font-medium text-red-500">FREE</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-400">
                Free Delivery on your Order!
              </Text>
            </View>
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.6,
                height: 1,
                marginTop: 12,
                marginBottom: 12,
              }}
            />
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-400">Delivery Tip</Text>
              <Text className="font-medium text-red-500">Add Tip</Text>
            </View>

            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-gray-400">Taxes and Charges</Text>
              <Text className="font-medium text-red-500">65</Text>
            </View>

            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.6,
                height: 1,
                marginTop: 12,
                marginBottom: 12,
              }}
            />

            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-medium">To Pay</Text>
              <Text className="font-medium">{total + 65}</Text>
            </View>
          </View>
        </View>

        {total === 0 ? null : (
        <View>
          <View className='flex-row justify-between items-center bg-white mt-3 p-3 py-6 rounded-lg mb-5'>
            <View>
              <Text className='text-base font-medium'>₹ {total + 65}</Text>
              <Text className='text-sm text-[#00A877] font-medium mt-[-5px]'>View Detailed Bill</Text>
            </View>
            <View className='bg-[#00A877] py-4 px-5 rounded-lg'>
                <Pressable onPress={() => {
                  navigation.navigate('Confirm');
                  dispatch(cleanCart());
                }}>
                <Text className='text-white font-medium text-base'>Proceed to Pay</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Cart;
