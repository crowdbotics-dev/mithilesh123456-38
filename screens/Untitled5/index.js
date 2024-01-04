import { FlatList } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
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
      <FlatList style={styles.cZBtgUcF} renderItem={({
        item
      }) => <View style={styles.JabBpKNk}></View>} ItemSeparatorComponent={() => <View style={styles.idDMzXnI} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    <View></View></SafeAreaView>;
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
  },
  cZBtgUcF: {
    position: "absolute",
    width: 100,
    height: 150
  },
  JabBpKNk: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  idDMzXnI: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled5;