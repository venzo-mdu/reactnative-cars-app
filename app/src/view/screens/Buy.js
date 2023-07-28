import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

const Sell = ({navigation, route}) => {
  const item = route.params;
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold',marginTop:30, fontSize: 22, color: COLORS.dark}}>
            CARS
          </Text>
          <Text
            style={{fontWeight: 'bold',marginTop:30,fontSize: 22, color: COLORS.primary}}>
            24
          </Text>
        </View>
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            BUY A CAR
          </Text>
          {/* <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Enter Your Details To Continue
          </Text> */}
        </View>
        <View style={{marginTop: 20}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 270,
              // width:300,
            }}>
            <Image
              source={{uri: item.image}}
              style={{height: 250, width: 330,marginTop:80,}}
            />
            <Text
              style={{fontSize: 25, fontWeight: 'bold',marginTop:15,color: COLORS.dark}}>
              {item.carname}
            </Text>
            <Text style={{fontSize: 17, color: COLORS.dark, marginTop: 25,marginRight:120}}>
              On Road Price:  {item.price} + GST
            </Text>
          </View>
          <TouchableOpacity>
                <View>
                   <Text onPress={() => navigation.navigate('book',item)} style={{color:COLORS.primary,marginTop:80,marginLeft:9}}>Show Booked Cars List</Text>
                 </View>
              </TouchableOpacity>

          <View style={STYLES.book}>
            <TouchableOpacity>
              {/* <View
                style={STYLES.button}
                onPress={() => navigation.navigate('succ')}>
                <Text style={STYLES.btnnew}>Buy</Text>
              </View> */}
              <Button
                title="BOOK FOR TESTDRIVE"
                onPress={() => navigation.navigate('succ')}></Button>
                
            </TouchableOpacity>
             
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Sell;
