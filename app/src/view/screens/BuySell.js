import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { StackActions } from '@react-navigation/native';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {Navigation} from 'react-native-navigation';



const BuySell = ({navigation}) =>{
    return(
         <View style={{flexDirection:'row',marginTop: 30,marginLeft:30,height:100,}}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            CARS
            </Text>
            <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
            24
            </Text>
            <View>
                <View style={ {marginTop:170,
                                marginLeft:2,
                                width:200,
                                height:60,
                                fontSize:'bold',
                                borderRadius:30,}}>
                        <Button title="BUY" onPress={() => navigation.navigate('Home')}> </Button>
                </View>
                                 
                <View style={{ marginTop:50,
                                marginLeft:2,
                                width:200,
                                fontSize:'bold',
                                borderRadius:50,}}><Button title="SELL"onPress={() => navigation.navigate('sell')}> </Button></View>
            </View>
             <Image style={{marginTop:450,width:450,marginLeft:-330}}source={require('../../assets/buysell.png')}/> 
        </View>
         
    );
}
export default BuySell;
