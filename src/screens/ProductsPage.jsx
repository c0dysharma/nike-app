import { StyleSheet, View, FlatList, Image, Pressable } from "react-native";
import productsData from "../data/products";

const ProductsPage = ({ navigation }) => {
  const onProductClick = () => navigation.navigate("Product Details");

  return (
    <FlatList
      data={productsData}
      renderItem={({ item }) => (
        <Pressable onPress={onProductClick} style={styles.imageContainer}>
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
