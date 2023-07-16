import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import HotelScreen from "./screens/HotelScreen";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./screens/Cart";
import ConfirmationScreen from "./screens/ConfirmationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Hotel" component={HotelScreen} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name="Confirm" component={ConfirmationScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
