import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  View
} from "react-native";
import { TODOS } from "../constant/const";
import { TextInput } from "react-native-gesture-handler";
import ToDoItem from "../components/toDoItem";
import DetailScreen from "./Details";

export default function toDoScreen({ navigation }) {
  const [textInput, setTextInput] = useState();
  const [status, setStatus] = useState();
  const [TodoList, setToDoList] = useState(TODOS);

  const deleteTodo = (id) => {
    const newTodoList = TodoList.filter((todo) => todo.id !== id);
    setToDoList(newTodoList);
  };
  const onLongPress = (todo) => {
    Alert.alert(
      "Delete your todo?",
      todo.body,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteTodo(todo.id) },
      ],
      { cancelable: true }
    );
  };

  const onchange = (text) => {
    setTextInput(text);
  };
  const onsubmit = () => {
    const newTodo = {
      id: TodoList.length + 1,
      status: "Active",
      body: textInput,
    };
    const newToDoList = [...TodoList, newTodo];
    setToDoList(newToDoList);
    setTextInput("");
    console.log(TodoList);
  };
  const toggleToDo = (id) => {
    const todo = TodoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = TodoList.findIndex((todo) => todo.id === id);
    TodoList[foundIndex] = todo;
    const newTodoList = [...TodoList];
    setToDoList(newTodoList);
    setToDoList(newTodoList);
    setTimeout(() => {
      navigation.navigate("Detail", { todo });
    }, 150);
  };

  return (
    <ImageBackground
      source={require("../assets/backGround.jpg")}
      style={styles.backGround}
    >
      <ScrollView>
        <View style = {styles.toDoButton}>
        {TodoList.map((item) => {
          return (
            <ToDoItem
              Data={item}
              key={item.id}
              LongPress={() => onLongPress(item)}
              onPress={() => toggleToDo(item.id)}
              
            />
          );
        })}
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onchange}
          value={textInput}
        ></TextInput>
        <TouchableOpacity style={styles.submitButton} onPress={onsubmit}>
          <Text style={styles.todoText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  todoText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  input: {
    marginTop: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginLeft:20,
    marginRight:20,
    backgroundColor: 'white'
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#009ED8',
    borderRadius: 10,
    padding: 12,
    marginLeft:20,
    marginRight:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },
  backGround: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'black',
    justifyContent: 'center',
  
  },
  toDoButton:{
    marginTop: '200%',  marginLeft:20,
    marginRight:20,
  }
});
