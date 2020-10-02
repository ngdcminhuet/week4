import 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import toDoScreen from './Screen/toDoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from './Screen/Details';
import ActiveScreen from './Screen/Active';
import CompleteScreen from './Screen/Complete';
import {routeIcons} from './constant/const';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const allScreen= () => {
  return (
    <Stack.Navigator initialRouteName = 'toDoScreen'screenOptions={{
          
      headerStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center"
      },
      headerTintColor: '#009ED8',
      headerTitleStyle: {
        fontWeight: 'bold',
       
      },
    }}>
      <Stack.Screen name = 'To Do' component ={toDoScreen}  options={{ headerTitle: props => <Title {...props} /> }}></Stack.Screen>
      <Stack.Screen name = 'Detail' component ={DetailScreen} ></Stack.Screen>
    </Stack.Navigator>
  );
};

const Title= () => {
  return (
    <View style = {{justifyContent: "center", alignItems: 'center'}}>
       <Text style = {{fontWeight: 'bold', fontSize: 30, color: '#009ED8'}}>To Do</Text>
    </View>
   
  );
}

export default function App() {
  return (
    <NavigationContainer >
    <Tab.Navigator initialRouteName = 'All'
     screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <AntDesign
            name={routeIcons[route.name]}
            size={24}
            color={focused ? "blue" : "grey"}
          />
        ),
      })}>
       
        <Tab.Screen name="Complete" component={CompleteScreen} />
        <Tab.Screen name="All" component={allScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
      </Tab.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
