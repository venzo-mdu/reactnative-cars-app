import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import { launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Sell = ({ navigation }) => {


  const [carname, setCarname] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [carnumber, setCarnumber] = useState('');
  const [enginecapacity, setEngineCapacity] = useState('');
  const [tyre, setTyre] = useState('');
  const [fuel, setFuel] = useState('');
  const [kilometer, setKilometer] = useState('');
  const [transmission, setTransmission] = useState('');
  const [powersteering, setPower] = useState('');
  const [noofowners, setNoofown] = useState('');


  const openGallery = async () => {
    console.log('image upload call');
    const images = await launchImageLibrary(options);
    console.log(images);
    setImage(images.assets[0].base64);
  };

  const submit = async () => {
    console.log('submittt', image);
    let data = JSON.stringify({
      carname: carname,
      model: model,
      year: year,
      price: price,
      base64Image: "data:image/png;base64," + image,
      carnumber: carnumber,
      enginecapacity: enginecapacity,
      tyre: tyre,
      fuel: fuel,
      kilometer: kilometer,
      transmission: transmission,
      powersteering: powersteering,
      noofowners: noofowners
    });
    console.log("The data ....", data);


    const token = await AsyncStorage.getItem('authToken');

    fetch('https://ts-nodecar-app.onrender.com/api/cars/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      },
      body: data,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('data : ', data);
        console.log('responseJson : ', responseJson);
        console.log('boddddddy image', image?.length);
      })
      .catch((error) => {
        console.error("error", error);
      });
    if (carname !== '' && model !== '' && year !== '') {
      //   ToastAndroid.show('Successfully Sold!', ToastAndroid.SHORT);
      navigation.replace('succ');
    }
  };

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>
            CARS
          </Text>
          <Text
            style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.primary }}>
            24
          </Text>
          <View style={STYLES.done}>

            <Button title="DONE" onPress={submit}>
              {' '}
            </Button>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
            SELL A CAR
          </Text>
          <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.light }}>
            Enter Your Details To Continue
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20 }}>
              {' '}
              Please enter car details..!
            </Text>
          </View>

          {/* <Text style={{fontWeight:'bold'}}> Please enter extra details!</Text> */}
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TextInput
              placeholder="Car Name:"
              style={STYLES.extra}
              value={carname}
              onChangeText={text => setCarname(text)}
            />
            <TextInput
              placeholder="Model:"
              style={STYLES.extra}
              value={model}
              onChangeText={text => setModel(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TextInput
              placeholder="Price:"
              style={STYLES.extra}
              value={price}
              onChangeText={text => setPrice(text)}
            />
            <TextInput
              placeholder="Car Number:"
              style={STYLES.extra}
              value={carnumber}
              onChangeText={text => setCarnumber(text)}
            />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TextInput placeholder="Engine Capacity::" style={STYLES.extra} value={enginecapacity}
              onChangeText={text => setEngineCapacity(text)} />

            <TextInput placeholder="Tyre:" style={STYLES.extra} value={tyre}
              onChangeText={text => setTyre(text)} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TextInput
              placeholder="Year:"
              style={STYLES.extra}
              value={year}
              onChangeText={text => setYear(text)}
            />

            <TextInput placeholder="Fuel:" style={STYLES.extra} value={fuel}
              onChangeText={text => setFuel(text)} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TextInput placeholder="Kilometer:" style={STYLES.extra} value={kilometer}
              onChangeText={text => setKilometer(text)} />
            <TextInput placeholder="Tranmission:" style={STYLES.extra} value={transmission}
              onChangeText={text => setTransmission(text)} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TextInput placeholder="Power Steering:" style={STYLES.extra} value={powersteering}
              onChangeText={text => setPower(text)} />
            <TextInput placeholder="No.Of.Owners:" style={STYLES.extra} value={noofowners}
              onChangeText={text => setNoofown(text)} />
          </View>
        </View>
        {/* <Icon       onPress={openGallery}
                            name="person-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        /> */}

        <TouchableOpacity onPress={openGallery}>
          <Image
            source={require('../../assets/upload.png')}
            style={{ height: 50, width: 50, marginLeft: 150, marginTop: 30 }}
          // value={image}
          // onChangeText={text => setImage(text)}
          />
        </TouchableOpacity>

        {/* <Button onPress={openGallery} title="upload"></Button> */}
        {/* <View style={STYLES.btnPrimary}>
          
          <Button title="SUBMIT" onPress={submit}>
            {' '}
          </Button>
        </View> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
const options = {
  //   title: 'Select Image',
  //   type: 'library',
  //   options: {
  maxHeight: 200,
  maxWidth: 200,
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: true,
  //   },
};
export default Sell;
