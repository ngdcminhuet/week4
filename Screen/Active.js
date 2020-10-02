import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import toDoScreen from "../Screen/toDoScreen";

export default function ActiveScreen() {
 return(
     <View style = {styles.container}>
         <Text>Active</Text>
     </View>
 );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
})