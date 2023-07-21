
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

// const [Email, setEmail] = useState('');
// const [password, setPassword] = useState('');
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



const SignInScreen = ({navigation}) => {
    return(
      <SafeAreaView
            style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection: 'row', marginTop: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
                     CARS
                    </Text>
                    <Text
                    style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
                     24
                    </Text>
                </View>
                <View style={{marginTop: 70}}>
                    <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
                        Welcome Back,
                    </Text>
                    <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
                        Sign in to continue
                    </Text>
                </View>
                <View style={{marginTop: 20}}>
                   <View style={STYLES.inputContainer}>
                            <Icon
                                name="mail-outline"
                                color={COLORS.light}
                                size={20}
                                style={STYLES.inputIcon}
                            />
                            <TextInput placeholder="Email" style={STYLES.input} />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="lock-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                        placeholder="Password"
                        style={STYLES.input}
                        secureTextEntry
                        />
                    </View>
                    <View style={STYLES.btnPrimary}>
                         {/* <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}> Sign In  </Text> */}
                         <Button style={{size:50,}}title="SignIn" onPress={() => navigation.navigate('Buy')}> </Button>
                                                    
                    </View>
                    <View
                        style={{
                        marginVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                    <View style={STYLES.line}></View>
                    <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
                    <View style={STYLES.line}></View>
                  </View>
                  <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        }}>
                     <View style={STYLES.btnSecondary}>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>
                                Sign in with
                            </Text>
                            <Image
                                style={STYLES.btnImage}
                                source={require('../../assets/facebook.png')}
                            />
                     </View>
                     <View style={{width: 10}}></View>
                     <View style={STYLES.btnSecondary}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
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
                        <Text style={{color: COLORS.light, fontWeight: 'bold',fontSize:17}}>
                            Don`t have an account ?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                           <Text style={{color: COLORS.pink, fontWeight: 'bold',fontSize:17}}>
                                Sign up
                           </Text>
                       </TouchableOpacity>
                  </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;