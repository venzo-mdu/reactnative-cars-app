import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Card,
  FlatList,
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
import {useState} from 'react';
import {useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  // const { username } = route.params;
  // const [username, setName] = useState('');
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = 'https://cars2-node-app.onrender.com/api/cars/getAll';

    let result = await fetch(url);

    result = await result.json();

    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  // const Card = ({car}) => {
  //   return (
  //     <TouchableHighlight
  //       underlayColor={COLORS.white}
  //       activeOpacity={0.9}
  //       onPress={() => navigation.navigate('DetailsScreen', car)}>
  //       <View style={style.card}>
  //         <View style={{alignItems: 'center', bottom: 1}}>
  //           {/* <Text>hello</Text> */}
  //           <Image source={car.image} style={{height: 100, width: 190}} />
  //         </View>
  //         <View style={{marginHorizontal: 20}}>
  //           <Text
  //             style={{fontSize: 18, color: COLORS.primary, fontWeight: 'bold'}}>
  //             {car.name}
  //           </Text>
  //           <Text style={{fontSize: 14, color: COLORS.dark, marginTop: 2}}>
  //             {car.Model}
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             marginTop: 10,
  //             marginHorizontal: 20,
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <Text
  //             style={{fontSize: 18, color: COLORS.dark, fontWeight: 'bold'}}>
  //             {car.price}
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 22}}>Hello!!</Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                color: COLORS.primary,
              }}>
              {global.email}
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 20, color: COLORS.grey}}>
            What do you looking for?
          </Text>
        </View>

        <View style={style.person}>
          <TouchableOpacity>
          {/* <Image
            source={require('../../assets/personnew.png')}
            style={{height: 50, width: 50}}
            onPress={() => navigation.navigate('UserScreen')}
          /> */}
          {/* <Text  style={{height: 50, width: 50}}
            onPress={() => navigation.navigate('UserScreen')}> hello </Text> */}
          <Icon
              name="person-outline"
              color={COLORS.light}
              size={50}
              onPress={() => navigation.navigate('UserScreen')}
            />
          </TouchableOpacity>
        </View>

        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for cars"
          />
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        horizontal={false}
        data={data}
        renderItem={({item}) => (
          // <Card car={item} />
          <TouchableHighlight
            underlayColor={COLORS.white}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailsScreen',item)}>
            <View style={style.card}>
              <View style={{alignItems: 'center', bottom: 1}}>
                {/* <Text>hello</Text> */}

                <Image
                  source={{uri:item.image}}
                  style={{height: 120, width: 170}}
                />
              </View>

              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.primary,
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
                    fontSize: 18,
                    color: COLORS.dark,
                    fontWeight: 'bold',
                    // marginBottom:70,
                  }}>
                  {item.year}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </SafeAreaView>
  );
};
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
    marginLeft: 50,
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
});

export default HomeScreen;
