import { StyleSheet, View, FlatList, Image } from "react-native";
import productsData from "../data/products";

const ProductsPage = () => {
  return (
    <FlatList
      data={productsData}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
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
