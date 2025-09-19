import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductItemHorizontal({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text numberOfLines={2} style={styles.title}>
        {product.product_name}
      </Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.discount}>{product.discount}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {renderStars(product.rating)}
        <Text style={{ fontSize: 12, marginLeft: 5 }}>({product.comment})</Text>
      </View>
    </View>
  );
}

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text key={i} style={{ color: i <= rating ? "gold" : "gray" }}>
        ★
      </Text>
    );
  }
  return stars;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  price: {
    fontWeight: "bold",
    marginTop: 4,
  },
  discount: {
    color: "gray",
    fontSize: 12,
  },
});
