import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,TouchableOpacity
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import COLORS from '../../consts/color';
  import {ScrollView} from 'react-native-gesture-handler';
  import STYLES from '../../styles';




const UserScreen= ({navigation}) => {
    

    return(
     <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            CARS
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
            24
          </Text>
        </View>
         <View>
         <Image
            source={require('../../assets/personnew.jpg')}
            style={{height: 130, width: 130,marginLeft:100,marginTop:30}}

            />
            <Text style={{fontSize:19,marginTop:40}}>Name:         {global.email}</Text>
            <Text style={{fontSize:19,marginTop:20}}>Email:         {global.email}</Text>
         </View>
           <TouchableOpacity>
            <Text style={{fontSize:19,marginTop:20,borderBottomColor:COLORS.primary,textDecorationLine: 'underline'}} onPress={() => navigation.navigate('mycar')}>My Cars </Text>
           </TouchableOpacity>
         <View>
          <Text style={{fontSize:19,marginTop:20,textDecorationLine: 'underline'}}>My Interests</Text>
         </View>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{color: COLORS.pink, marginTop:170,fontWeight: 'bold', fontSize: 17}}>
              Logout
            </Text>
          </TouchableOpacity>
         </View>
        </ScrollView>
        </SafeAreaView>

    )
        
}
export default UserScreen;