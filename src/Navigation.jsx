import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import ProductsDetailsPage from "./screens/ProductsDetailsPage";
import ProductsPage from "./screens/ProductsPage";
import ShoppingCart from "./screens/ShoppingCartPage";
import { useCartStore } from "./stores";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const cartListItemsLen = useCartStore((state) => state.cartItems).length;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsPage}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={styles.cartItems}>{cartListItemsLen}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductsDetailsPage}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cartItems: {
    fontWeight: "500",
    marginLeft: 5,
  },
});

export default Navigation;
