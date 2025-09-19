import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductItem({ image, title, shop}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text numberOfLines={1}>{title}</Text>
        <Text style={{ color: "red" }}>{shop}</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity style={styles.chatBtn} >
          <Text style={{ color: "white", textAlign: "center" }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    padding: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderBottomColor:"black",
    borderBottomWidth:1,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "contain",
    marginRight: 15,
  },
  chatBtn: {
    backgroundColor: "red",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
