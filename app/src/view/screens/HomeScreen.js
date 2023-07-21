import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View, Card,
  FlatList
} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import cars from '../../consts/cars';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;




const HomeScreen = ({navigation}) => {
  const Card = ({car}) => {
    return (
      <TouchableHighlight underlayColor={COLORS.white}
                              activeOpacity={0.9}
                              onPress={() => navigation.navigate('DetailsScreen', car)}> 
        <View style={style.card}>
          <View style={{ alignItems: 'center',bottom:1}}>
            {/* <Text>hello</Text> */}
            <Image source={car.image} style={{height:100,width:190}} />
          </View>
          <View style={{marginHorizontal: 20}}>
              <Text style={{fontSize: 18,color:COLORS.primary,fontWeight: 'bold'}}>{car.name}</Text>
              <Text style={{fontSize: 14, color: COLORS.dark, marginTop: 2}}>
                {car.Model}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18,color:COLORS.dark,fontWeight: 'bold'}}>
                {car.price}
              </Text>
            </View>
        </View>
      </TouchableHighlight>
     
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 22 }}>Hello!!</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 ,color:COLORS.primary}}>
              Ragavi
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 20, color: COLORS.grey }}>
            What do you looking for?
          </Text>

        </View>

        <View style={style.person}>
          <Image source={require('../../assets/person.png')}
            style={{ height: 50, width: 50, }} />
        </View>

        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1,fontSize: 18 }}
            placeholder="Search for cars"
          />
        </View>
      </View>

<FlatList
  showsVerticalScrollIndicator={false}
  numColumns={2}
  horizontal={false}
  data={cars}
  renderItem={({ item }) => <Card car={item} />}
/>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 30,

    backgroundColor: COLORS.light,
    marginRight: 200,
    marginLeft: -300,
    marginTop: 100,
    width: 300,
    flexDirection: 'row',
    
  },
  person: {
    marginLeft: 50
  },
  card: {
    height: 200,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },

})

export default HomeScreen;