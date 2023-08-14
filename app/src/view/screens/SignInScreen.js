import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Button,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


// const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', {
//         username,
//         password,
//       });

//       // Assuming the response contains a 'token' field
//       const { token } = response.data;
//       // You can store the token in AsyncStorage or secure storage
//       console.log('Authentication token:', token);

//       // Navigate to the next screen or perform any other action here
//     } catch (error) {
//       console.log('Login failed:', error.response.data.error);
//     }
//   };



const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const result = await fetch('https://ts-nodecar-app.onrender.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email, password }),
    },
    );
    const data = await result.json();
    console.log("dataaaaaaaaaaaa", data)
    const authToken = data?.token;
    // console.log("authtokrnnnnnn", authToken);
    await AsyncStorage.setItem('authToken', authToken);

    console.log("access token", authToken?.accessToken);
    // const authTokenFromAsync = await AsyncStorage.getItem('authToken');
    // JSON.stringify(authTokenFromAsync);
    // console.log("async",authTokenFromAsync) 

    global.email = email;
    // global.roles = roles;
    // console.log("roles", roles)
    console.log("here");
    console.log("access token", data)
    // console.log("roles checkkkk", data.user.roles)
    if (data.user.roles == 'checker') {
      navigation.replace('Check');

    }
    else {
      ToastAndroid.show('You Logged In!', ToastAndroid.SHORT);

      navigation.replace('Buy');
    }

    //   if (result.ok) {
    //     ToastAndroid.show('You Logged In!', ToastAndroid.SHORT);

    //     navigation.replace('Buy');
    //   }
    //   else {
    //     ToastAndroid.show('Invalid Details', ToastAndroid.SHORT);
    //   }
  };

  // //auth
  //  handleLogin= async (email, password) => {
  //   try {
  //     const token = await login(email, password);
  //     await AsyncStorage.setItem('authToken', token);
  //     console.log("token is iikj",JSON.stringify(token));
  //     // Redirect or do anything else you need after successful login
  //   } catch (error) {
  //     // Handle login errors
  //     console.error('Error during login:', error);  
  //   }
  // };



  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>
            CARS
          </Text>
          <Text
            style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.primary }}>
            24
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
            Welcome Back,
          </Text>
          <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.light }}>
            Sign in to continue
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email"
              style={STYLES.input}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.btnPrimary}>
            {/* <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}> Sign In  </Text> */}
            <TouchableOpacity>
              {/* <View style={STYLES.button} onPress={login}>
              <Text style={STYLES.btnnew}>SignIn</Text>
            </View> */}
              <Button title="SignIn" onPress={login}>
                {' '}
              </Button>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assets/facebook.png')}
              />
            </View>
            <View style={{ width: 10 }}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assets/google.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{ color: COLORS.light, fontWeight: 'bold', fontSize: 17 }}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{ color: COLORS.pink, fontWeight: 'bold', fontSize: 17 }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
