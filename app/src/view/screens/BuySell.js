import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BuySell = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 40,
         marginLeft:40,
        
      
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
        CARS
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
        24
      </Text>
      <View style={{marginLeft:270,position:'absolute'}}>
      <TouchableOpacity>
      <Icon
              name="person-outline"
              color={COLORS.light}
              size={40}
              
              onPress={() => navigation.navigate('UserScreen')}
            />
            </TouchableOpacity>
        </View>
      <View>
        <View
          style={{
            marginTop: 140,
            marginLeft:-10,
            // backgroundColor:'red',
            width:300,
            height: 47,
            fontSize: 'bold',
            borderRadius: 30,
            
            flexDirection:'row'
            
          }}>
          {/* <Button  title="BUY" onPress={() => navigation.navigate('Home')}>
            {' '}
          </Button> */}
          <Text onPress={() => navigation.navigate('Home')} style={{backgroundColor:COLORS.primary,textAlign:'center',fontSize:30,height:40,width:90,color:COLORS.white}}>BUY</Text>
        
          <View style={STYLES.space} />
       
           {/* <Button title="SELL" onPress={() => navigation.navigate('sell')}>
            {' '}
          </Button> */}
        
        <Text onPress={() => navigation.navigate('sell')} style={{backgroundColor:COLORS.primary,textAlign:'center',fontSize:30,height:40,width:90,color:COLORS.white}}>SELL</Text>
      </View>
      
      <View>
       
         <Text style={{marginTop:70,marginLeft:20,fontSize:20}}>Popular Brands</Text>
   
        <View>
          <Image style={{height:70,width:100,marginLeft:160,marginTop:-17}} source={require('../../assets/maruti.png')}/>
        </View>
        <View>
          <Image style={{height:40,width:50,marginTop:-42,marginLeft:60,position:'absolute'}} source={require('../../assets/honda.png')}/>
        </View>
        <View>
          <Image style={{height:70,width:70,marginTop:17,marginBottom:-5,marginLeft:170,position:'absolute'}} source={require('../../assets/susu.png')}/>
        </View>
        <View>
          <Image style={{height:60,width:60,marginLeft:60,marginTop:30}} source={require('../../assets/bmw.pmg.png')}/>
        </View>
        <View>
          <Image style={{height:50,width:50,marginTop:-130,marginLeft:-50,position:'absolute'}} source={require('../../assets/volks.png')}/>
        </View>
        <View>
          <Image style={{height:60,width:90,marginTop:-45,marginLeft:-60,position:'absolute'}} source={require('../../assets/toto.png')}/>
        </View>
      

      </View>
      <View>
        <Image
          style={{marginTop: 90, width: 450, marginLeft: -140}}
          source={require('../../assets/buysell.png')}
        />
      </View>
      </View>
    </View>
  );
};
export default BuySell;
