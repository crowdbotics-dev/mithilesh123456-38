import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5Copy = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable>
          <View style={styles.vXZZbRyt}></View>
        </Pressable>
        <Pressable>
          <View style={styles.WpHtBwuP}></View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  vXZZbRyt: {
    height: 90,
    width: 100,
    backgroundColor: "#4d73d6",
    borderRadius: 19,
    color: "#777777",
    borderWidth: 10,
    position: "absolute",
    left: 86,
    top: 362
  },
  WpHtBwuP: {
    width: 90,
    height: 100,
    backgroundColor: "#4d73d6",
    borderRadius: 47,
    left: 115,
    top: 155,
    borderColor: "#000000",
    borderWidth: 19,
    position: "absolute"
  }
});
export default Untitled5Copy;