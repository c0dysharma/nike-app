import {
  StyleSheet,
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";

import { useProductsStore, useCartStore } from "../stores";

const ProductsDetailsPage = () => {
  const product = useProductsStore((state) => state.selectedProduct);
  const addToCartState = useCartStore((state) => state.addCartItem);

  const { width } = useWindowDimensions();
  const addToCart = () => addToCartState(product);

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable style={styles.buttonContainer} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  buttonContainer: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    width: "90%",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductsDetailsPage;
