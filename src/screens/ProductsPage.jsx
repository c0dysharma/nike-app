import { StyleSheet, FlatList, Image, Pressable } from "react-native";
import { useProductsStore } from "../stores";

const ProductsPage = ({ navigation }) => {
  const productsData = useProductsStore((state) => state.products);
  const selectProduct = useProductsStore((state) => state.selectProduct);

  return (
    <FlatList
      data={productsData}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // choose the product clicked
            selectProduct(item.id);
            navigation.navigate("Product Details");
          }}
          style={styles.imageContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 1,
    width: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsPage;
