import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';




const Checker = ({ navigation, route }) => {
    const item = route.params;

    const [data, setData] = useState([]);
    const getAPIData = async () => {
        const url = 'https://cars2-node-app.onrender.com/api/cars/getAll';

        let result = await fetch(url);

        result = await result.json();
        console.log("resultt is", result)
        setData(result);
        // console.log("data issssss",setData())

    };

    useEffect(() => {
        getAPIData();
    }, []);

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
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15, color: COLORS.primary }}>REQUESTED CAR LIST</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    // numColumns={1}
                    horizontal={false}
                    data={data}
                    renderItem={({ item }) =>
                    (

                        <TouchableHighlight
                            underlayColor={COLORS.white}
                            activeOpacity={0.9}
                            onPress={() => navigation.navigate('approve', item)}>
                            <View style={style.card1}>
                                <View style={{ alignItems: 'center', bottom: 1 }}>
                                    {/* <Text>hello</Text> */}

                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ height: 80, width: 100, marginLeft: 150, marginTop: 10 }}
                                    />
                                </View>

                                <View style={{ marginHorizontal: 20 }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: COLORS.primary,
                                            fontWeight: 'bold',
                                            marginTop: -66,

                                        }}>
                                        {item.carname}
                                    </Text>

                                    <Text style={{ fontSize: 14, marginBottom: -20, color: COLORS.dark, marginTop: 2 }}>
                                        {item.model}
                                    </Text>
                                </View>

                                {/* <View
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
                                </View> */}

                            </View>
                        </TouchableHighlight>

                    )}
                />
            </ScrollView>
        </SafeAreaView>

    )
};
const style = StyleSheet.create({
    card1: {
        height: 100,
        width: 300,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 12,
        backgroundColor: COLORS.white,

    }

})
export default Checker;