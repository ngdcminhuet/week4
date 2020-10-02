import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import toDoScreen from "../Screen/toDoScreen";

export default function ToDoItem(props) {
  const buttonStyle =
    props.Data.status === "Active" ? styles.activeButton : styles.doneButton;
  return (
    <View>
      <TouchableOpacity
        key={props.Data.id}
        style={buttonStyle}
        onPress={props.onPress}
        onLongPress={() => props.LongPress(props)}
      >
        <Text style={styles.todoText}>{props.Data.body}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  activeButton: {
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "pink",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  doneButton: {
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#47cf73",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  todoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
});
