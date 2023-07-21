import {SafeAreaView, StyleSheet, View, Text, Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import {ScrollView} from 'react-native-gesture-handler';

const DetailsScreen = ({navigation,route}) => {
    const item = route.params;

    return(
     <SafeAreaView style={{backgroundColor: COLORS.white}}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
            </View>
       <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 280,
                }}>
                <Image source={item.image} style={{height: 180, width: 350}} />
                </View>
                <View style={style.details}>
                    <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        }}>
                        <Text
                        style={{fontSize: 25, fontWeight: 'bold', color: COLORS.dark}}>
                        {item.name}
                        </Text>
                    </View>
                    <Text style={style.detailsText}>
                        The new facelift brings more features and design tweaks to the table
                        Premium feel - The consistent quality and fit/finish are easily the segment's best 
                        Spacious cabin - Despite looking a bit compact, the interiors are adequately roomy
                        Manoeuvrability Highway while driving 140 km/h Speed. 
                    </Text>
                    <Text style={{fontSize: 25,marginTop:70,color:COLORS.dark,fontWeight: 'bold'}}>
                        {item.price}
                    </Text>
                    <View style={{marginTop:40,marginBottom:140}}> 
                        <Button title="BUY" onPress={() => navigation.navigate('addtocart')}> </Button>
                    </View>
                  
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
        details: {
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 60,
            backgroundColor: '#909090',
            borderTopRightRadius: 40,
            
            borderTopLeftRadius: 40,
          },
          detailsText: {
            marginTop: 10,
            lineHeight: 22,
            fontSize: 18,
            color: COLORS.white,
          },
    })
export default DetailsScreen;