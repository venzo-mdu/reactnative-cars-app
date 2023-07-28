import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';




const Book = ({navigation,route}) => {
    const item = route.params;

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
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold',marginTop:15,color: COLORS.primary}}>BOOKED CARS LIST</Text>
            </View>
            <View style={{marginHorizontal: 20,marginTop:20}}>
                <Text
                  style={{
                    fontSize: 17,
                    color: COLORS.dark,
                    fontWeight: 'bold',
                  }}>
                  {item.carname}
                </Text>

                <Text style={{fontSize: 14, color: COLORS.dark, marginTop: 2}}>
                  {item.model}
                </Text>
              </View>

              <View
                style={{
                  marginTop: 10,

                  marginHorizontal: 20,

                  flexDirection: 'row',

                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 14, color: COLORS.dark, marginTop: 2
                  }}>
                       {item.year}


              
                  
                </Text>
              </View>
                        
                   
            </ScrollView>
        </SafeAreaView>
    )};
export default Book;