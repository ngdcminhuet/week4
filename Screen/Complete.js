import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Completescreen(props) {
  return (
    <View style={styles.container}>
      <Text>Completescreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
