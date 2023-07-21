import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';




const Sell = ({navigation}) => {
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
                    SELL A CAR
                </Text>
                <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
                    Enter Your Details To Continue
                </Text>
            </View>
            <View style={{marginTop: 20}}>
               <View style={STYLES.inputContainer}>
                        <Icon
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Name" style={STYLES.input} />
                </View>
                <View style={STYLES.inputContainer}>
                    <Icon
                        name="mail-outline"
                        color={COLORS.light}
                        size={20}
                        style={STYLES.inputIcon}
                    />
                    <TextInput
                    placeholder="Email"
                    style={STYLES.input}
                    secureTextEntry
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
                    placeholder="Password"
                    style={STYLES.input}
                    secureTextEntry
                    />
                </View>
                <View style={STYLES.inputContainer}>
                    {/* <Icon
                        name="-outline"
                        color={COLORS.light}
                        size={20}
                        style={STYLES.inputIcon}
                    /> */}
                    <TextInput
                    placeholder="Car Number"
                    style={STYLES.input}
                    secureTextEntry
                    />
                </View>
                <View style={STYLES.btnPrimary}>
                     {/* <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}> Sign In  </Text> */}
                     <Button title="SUBMIT" onPress={() => navigation.navigate('succ')}> </Button>
                                                
                </View>
            </View>
            </ScrollView>
            </SafeAreaView>
    )}
    export default Sell;