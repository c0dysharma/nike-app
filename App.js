import { StyleSheet, View } from "react-native";
import ProductsPage from "./src/screens/ProductsPage";
import ProductsDetailsPage from "./src/screens/ProductsDetailsPage";
import ShoppingCart from "./src/screens/ShoppingCartPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsPage /> */}
      {/* <ProductsDetailsPage /> */}
      <ShoppingCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
