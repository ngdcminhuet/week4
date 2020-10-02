import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import toDoScreen from "../Screen/toDoScreen";

export default function DetailScreen({route}) {
 return(
     <View>
         <Text style = {styles.text}>{route.params.todo.body}</Text>
         <Text style = {styles.text}>{route.params.todo.status}</Text>
     </View>
 );
}
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
    }
})