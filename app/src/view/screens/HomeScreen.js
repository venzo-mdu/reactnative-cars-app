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
  Modal,
  Button,
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
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import STYLES from '../../styles';

const HomeScreen = ({ navigation }) => {
  // const { username } = route.params;
  // const [username, setName] = useState('');
  const [data, setData] = useState([]);
  const [search, SetSearch] = useState('');
  const [olddata, setoldData] = useState([]);
  const searchRef = useRef();
  const [show, setState] = useState(false);
  // const [visible,setVisible]=useState(false);


  const getAPIData = async () => {
    const url = 'https://ts-nodecar-app.onrender.com/api/cars';

    let result = await fetch(url,{
      method: 'GET',
      headers: {
          // Accept: 'application/json',
           'Content-Type': 'application/json',
          // 'Authorization': 'Bearer ' + token
      }
  })
    
    
    result = await result.json();
    console.log("resulttm  updatedd", result)
    setData(result);
    // console.log("data issssss",setData())
    setoldData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  //search
  const onSearch = text => {
    if (text == '') {
      setData(olddata);
    }
    else {
      let tempList = data.filter(item => {
        return item.carname.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };
  //  constructor()
  //  {
  //   super();
  //   this.state={
  //     show:false
  //   }

  //  }
  const sortByPriceAscending = () => {
    const sortedData = [...data].sort((a, b) => a.year - b.year);
    console.log("sorted data", sortedData);
    setData(sortedData);
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 22 }}>Hello!!</Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                color: COLORS.primary,
              }}>
              {global.username}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 20, color: COLORS.grey }}>
            What do you looking for?
          </Text>

          <View>
            <TouchableOpacity>

              <Icon
                name="tune"
                size={30}
                style={{ marginTop: 45 }}
                onPress={() => setState(true)} />
              <Modal
                transparent={true}
                visible={show}
                onRequestClose={() => setState(false)}
                animationType='slide'>
                  // presentationStyle='formsheet'
                <View style={{ flex: 1 }}>
                  <View style={{ backgroundColor: '#7CB5F3', borderRadius: 30, margin: 50, padding: 40 }}>
                    <View>
                      <TouchableOpacity>

                        <Text style={{
                          borderBottomWidth: 0.9,
                          fontSize: 20, width: '100%',
                          justifyContent: 'center'
                        }}>       Sort by Kilometers</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={STYLES.space}></View>
                    <View>
                      <TouchableOpacity>

                        <Text style={{
                          borderBottomWidth: 0.9,
                          width: '100%',
                          justifyContent: 'center',
                          paddingLeft: 20, fontSize: 20
                        }}>   High to low price</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={STYLES.space}></View>
                    <View>
                      <TouchableOpacity>
                        <Text style={{
                          borderBottomWidth: 0.9,
                          fontSize: 20, width: '100%',
                          justifyContent: 'center'
                        }}>       Low to High price</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={STYLES.space}></View>
                    <Button title="close" color="red" onPress={() => setState(false)}></Button>
                  </View>

                </View>

              </Modal>

              {/* style={{marginLeft:320}}/> */}

            </TouchableOpacity>
          </View>

          {/* filter */}
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
              color={COLORS.primary}
              size={50}
              style={{ marginLeft: 50 }}
              onPress={() => navigation.navigate('UserScreen')}
            />

          </TouchableOpacity>
        </View>

        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              SetSearch(txt);

            }}
            placeholder="Search for cars"
          />
          {search == '' ? null : (
            <TouchableOpacity
              onPress={() => {
                searchRef.current.clear();
                onSearch('');
                SetSearch('');
              }}
            >
              <Icon
                name="close"
              />
            </TouchableOpacity>
          )}

        </View>

      </View>


      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        horizontal={false}
        data={data}
        renderItem={({ item }) => (
          // <Card car={item} />
          <TouchableHighlight
            underlayColor={COLORS.white}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailsScreen', item)}>
            <View style={style.card}>
              <View style={{ alignItems: 'center', bottom: 1 }}>
                {/* <Text>hello</Text> */}

                <Image
                  source={{ uri: item.image }}
                  style={{ height: 120, width: 170 }}
                />
              </View>

              <View style={{ marginHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.primary,
                    fontWeight: 'bold',

                  }}>
                  {item.carname}
                </Text>

                <Text style={{ fontSize: 14, color: COLORS.dark, marginTop: 2 }}>
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
