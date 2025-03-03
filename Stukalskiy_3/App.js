import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      {/* Фиксированные размеры */}
      <View style={styles.fixedBox}>
        <Text style={styles.text}>Фиксированный (100x100)</Text>
      </View>

      {/* Гибкие размеры */}
      <View style={styles.flexibleBox}>
        <Text style={styles.text}>Гибкий (flex: 1)</Text>
      </View>

      {/* Процентные размеры */}
      <View style={[styles.percentageBox, { width: width * 0.6, height: height * 0.1 }]}>
        <Text style={styles.text}>Процентный (60% ширины, 10% высоты)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f0f0f0",
  },
  fixedBox: {
    width: 100,
    height: 100,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  flexibleBox: {
    flex: 1,
    width: "80%",
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  percentageBox: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
