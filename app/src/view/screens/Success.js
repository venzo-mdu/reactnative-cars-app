import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';




const Success = ({navigation}) => {
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
              <Image style={STYLES.tickImage} source={require('../../assets/tick.png')}
                       />
                       <Text style={{fontSize:20,fontWeight:'bold',marginLeft:50,marginTop:20,}}> Successfully Made a request</Text>
                       {/* <View style={STYLES.home}> */}
                       <Icon
                                name="home-filled"
                                color={COLORS.light}
                                size={30}
                                style={STYLES.home}
                                onPress={() => navigation.navigate('Buy')}/>
                       {/* </View> */}
                     
            </ScrollView>
        </SafeAreaView>
    )}
    export default Success;