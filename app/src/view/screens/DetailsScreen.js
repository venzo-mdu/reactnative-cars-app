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
import {ScrollView} from 'react-native-gesture-handler';
import STYLES from '../../styles';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;

  return (
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
          <Image source={{uri: item.image}} style={{height: 250, width: 340}} />
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
              {item.carname}
            </Text>
          </View>
          {/* extra inputs */}
          <Text style={STYLES.titlee}>FEATURES OF CAR</Text>
          <View>
            
           <Text style={style.detailsText}>Model:   {item.model}</Text>
           <Text style={style.detailsText}>Year:      {item.year}</Text>

           <Text style={style.detailsText}>Price:     {item.price}</Text>

           <Text style={style.detailsText}>Car Number:  {item.carnumber}</Text>

           <Text style={style.detailsText}>Fuel:   {item.fuel}</Text>

           <Text style={style.detailsText}>EngineCapacity:   {item.enginecapacity}</Text>

           <Text style={style.detailsText}>Kilometers runned:   {item.kilometer} </Text>

           <Text style={style.detailsText}>Tyre: {item.tyre}</Text>

           <Text style={style.detailsText}>Power Steering:   {item.powersteering}</Text>
           <Text style={style.detailsText}>Number Of Owners:  {item.noofowners}</Text>



          </View>
          {/* <Text style={style.detailsText}> */}
            
          
          {/* <Text
            style={{
              fontSize: 25,
              marginTop: 70,
              color: COLORS.dark,
              fontWeight: 'bold',
            }}>
            {item.year}
          </Text> */}
          <View
            style={{
              marginTop: 40,
              marginBottom: 100,
              
              width: 200,
              marginLeft: 80,
            }}>
            <Button
              title="BUY"
              onPress={() => navigation.navigate('addtocart', item)}>
              {' '}
            </Button>
          </View>
          <View>

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
    // backgroundColor: '#909090',
    backgroundColor:COLORS.primary,
    borderTopRightRadius: 40,

    borderTopLeftRadius: 40,
  },
  detailsText: {
    marginTop: 17,
    lineHeight: 22,
    
    fontSize: 18,
    color: COLORS.white,
  },
  titlee:{
    fontSize: 25, fontWeight: 'bold', color: COLORS.dark

  },
});
export default DetailsScreen;
