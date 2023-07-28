
import React from "react";
import {Text,View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './app/src/view/screens/SignInScreen';
import SignUpScreen from './app/src/view/screens/SignUpScreen';
import BuySell from './app/src/view/screens/BuySell';
import HomeScreen from './app/src/view/screens/HomeScreen';
import {Navigation} from 'react-native-navigation';
import Sell from './app/src/view/screens/Sell';
import Success from './app/src/view/screens/Success';
import DetailsScreen from './app/src/view/screens/DetailsScreen';
import Buy from  './app/src/view/screens/Buy';
import Booklist from  './app/src/view/screens/Booklist';
import UserScreen from  './app/src/view/screens/UserScreen';

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState}from 'react-navigation';


const Stack = createStackNavigator();

const App =() =>{
    return(
        <NavigationContainer> 
            <Stack.Navigator screenOptions={{header: () =>null}} >
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="Buy" component={BuySell}/>
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="sell" component={Sell}/>
              <Stack.Screen name="succ" component={Success}/>
              <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
              <Stack.Screen name="addtocart" component={Buy}/>
              <Stack.Screen name="book" component={Booklist}/>
              <Stack.Screen name="UserScreen" component={UserScreen}/>

             


            
            </Stack.Navigator>  
        </NavigationContainer>
        
    );
};
export default App;