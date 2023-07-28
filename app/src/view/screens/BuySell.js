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
        marginTop: 30,
        // marginRight:1,
        height: 100,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
        CARS
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
        24
      </Text>
      <View style={{marginLeft:20}}>
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
            marginTop: 170,
            marginRight: 50,
            width: 200,
            height: 60,
            fontSize: 'bold',
            borderRadius: 30,
          }}>
          <Button title="BUY" onPress={() => navigation.navigate('Home')}>
            {' '}
          </Button>
        </View>

        <View
          style={{
            marginTop: 50,
            marginLeft: 2,
            width: 200,
            fontSize: 'bold',
            borderRadius: 50,
          }}>
          <Button title="SELL" onPress={() => navigation.navigate('sell')}>
            {' '}
          </Button>
        </View>
      </View>
      <View>
        <Image
          style={{marginTop: 420, width: 450, marginLeft: -410}}
          source={require('../../assets/buysell.png')}
        />
      </View>
    </View>
  );
};
export default BuySell;
