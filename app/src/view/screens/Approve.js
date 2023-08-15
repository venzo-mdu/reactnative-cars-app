import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import { ScrollView } from 'react-native-gesture-handler';
import STYLES from '../../styles';
import App from '../../../../App';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Approve = ({ navigation, route }) => {
    const item = route.params;
    // const [userId, setUserId] = useState('');
    const sub = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            // console.log("userid", userId)
            const response = await fetch(`https://ts-nodecar-app.onrender.com/api/checker/approve-cars/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    
                },
                //   body: JSON.stringify({ name: updatedName }), // Update with the desired data to send
            });

            
            console.log("success",response)
            navigation.replace('succ');
        } catch (error) {
            console.error('Error updating :', error);
        }
    };
     const deny = async ()=>{
        try {
            const token = await AsyncStorage.getItem('authToken');
            const response = await fetch(`https://ts-nodecar-app.onrender.com/api/checker/deny-cars/${item._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    
                },
               });
            console.log("denied",response)
            navigation.replace('succ');
        } catch (error) {
            console.error('Error updating :', error);
        }

     };



    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white }}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Requests</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 280,
                    }}>
                    <Image source={{ uri: item.image }} style={{ height: 190, width: 250 }} />
                </View>
                <View style={style.details}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.dark, marginLeft: 30 }}>
                            {item.carname}
                        </Text>
                    </View>
                    <Text>--------------------------------------------------------------------------------------------------</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 15, color: COLORS.primary, textAlign: 'center' }}>
                        The above model car launched in the year{item._id} {item.year} and had great engine capacity of {item.enginecapacity} only used by {item.noofowners}
                        number of owners
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 60,
                        // marginLeft: 0,
                        // marginBottom: 100,

                        width: 100,
                        marginLeft: 130,
                    }}>
                    <Button
                        title="APPROVE"
                        onPress={sub}>
                        {' '}
                    </Button>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        // marginBottom: 100,
                        // marginLeft: 160,
                        width: 100,
                        marginLeft: 130,
                    }}>
                    <Button
                        title="DENY"
                        onPress={deny}>
                        {' '}
                    </Button>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    // details: {
    //     paddingHorizontal: 20,
    //     paddingTop: 40,
    //     paddingBottom: 60,
    //     // backgroundColor: '#909090',
    //     // backgroundColor: COLORS.primary,
    //     borderTopRightRadius: 40,

    //     borderTopLeftRadius: 40,
    // },
    // detailsText: {
    //     marginTop: 17,
    //     lineHeight: 22,

    //     fontSize: 18,
    //     color: COLORS.white,
    // },
    // titlee: {
    //     fontSize: 25, fontWeight: 'bold', color: COLORS.dark

    // },
});
export default Approve;
