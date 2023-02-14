import { StyleSheet, View } from "react-native";
import ProductsPage from "./src/screens/ProductsPage";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
