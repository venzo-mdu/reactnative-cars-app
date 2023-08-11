import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button, FlatList,
    TextInput, TouchableOpacity, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import { ScrollView } from 'react-native-gesture-handler';
import STYLES from '../../styles';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MyInterest = ({ navigation }) => {
    const [data, setData] = useState([]);
    const Mydata = async () => {
        const url = 'https://cars2-node-app.onrender.com/api/cars/';
        const token = await AsyncStorage.getItem('authToken');
        console.log("token", url, token, token?.accessToken);

        let result = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        })

        result = await result.json();
        console.log("results from my car", result)
        setData(result);


    };

    useEffect(() => {
        Mydata();
    }, []);

    return (

        <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            horizontal={false}
            data={data}
            renderItem={({ item }) => (

                // <Card car={item} />

                <View style={{ marginHorizontal: 20 }}>
                    <View>
                        <Image
                            source={{ uri: item.image }}
                            style={{ height: 120, width: 170 }}
                        />
                    </View>
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

            )}
        />
    );


}
export default MyInterest;