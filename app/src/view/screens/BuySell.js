import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BuySell = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 40,


      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>
        CARS
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.primary }}>
        24
      </Text>
      <View style={{ marginLeft: 270, position: 'absolute' }}>
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
            marginLeft: -10,
            // backgroundColor:'red',
            width: 300,
            height: 47,
            fontSize: 'bold',
            borderRadius: 30,

            flexDirection: 'row'

          }}>
          {/* <Button  title="BUY" onPress={() => navigation.navigate('Home')}>
            {' '}
          </Button> */}
          <Text onPress={() => navigation.navigate('Home')} style={{
            backgroundColor: COLORS.primary,
            textAlignVertical: 'center', textAlign: 'center',
            borderRadius: 20, fontSize: 20,
            height: 50, width: 90, color: COLORS.white
          }}>Buy</Text>

          <View style={STYLES.space} />

          {/* <Button title="SELL" onPress={() => navigation.navigate('sell')}>
            {' '}
          </Button> */}

          <Text onPress={() => navigation.navigate('sell')} style={{
            backgroundColor: COLORS.primary,
            borderRadius: 20,
            textAlignVertical: 'center', textAlign: 'center',
            fontSize: 20, height: 50,
            width: 90, color: COLORS.white
          }}>Sell</Text>
        </View>

        <View>

          <Text style={{ marginTop: 50, marginLeft: 20, fontSize: 20 }}>Popular Brands</Text>
          <View style={STYLES.space} />

          <View>
            <TouchableOpacity>

              <Image style={{ height: 55, width: 60, marginLeft: 160, marginTop: -17 }} source={require('../../assets/maruti.png')} />

            </TouchableOpacity>
          </View>

          <View>
            <Image style={{ height: 30, width: 40, marginTop: -42, marginLeft: 60, position: 'absolute' }} source={require('../../assets/honda.png')} />
          </View>
          <View>
            <Image style={{ height: 40, width: 40, marginTop: 17, marginBottom: -5, marginLeft: 170, position: 'absolute' }} source={require('../../assets/susu.png')} />
          </View>
          <View>
            <Image style={{ height: 40, width: 40, marginLeft: 60, marginTop: 30 }} source={require('../../assets/bmw.pmg.png')} />
          </View>
          <View>
            <Image style={{ height: 40, width: 40, marginTop: -110, marginLeft: -60, position: 'absolute' }} source={require('../../assets/volks.png')} />
          </View>
          <View>
            <Image style={{ height: 40, width: 50, marginTop: -35, marginLeft: -65, position: 'absolute' }} source={require('../../assets/toto.png')} />
          </View>


        </View>
        <View>
          <Image
            style={{ marginTop: 30, width: 450, marginLeft: -140 }}
            source={require('../../assets/buysell.png')}
          />
        </View>
      </View>
    </View>
  );
};
export default BuySell;
