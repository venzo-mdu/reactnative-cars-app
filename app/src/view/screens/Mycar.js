import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,FlatList,
    TextInput,TouchableOpacity
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import COLORS from '../../consts/color';
  import {ScrollView} from 'react-native-gesture-handler';
  import STYLES from '../../styles';
  import { useState } from 'react';
  import { useEffect } from 'react';
  

  const Mycar =({navigation})=>{
    const [data, setCars] = useState([]);
    const Mydata = async () => {
        const url = 'https://cars2-node-app.onrender.com/api/cars/';
        const headers = { 'Authorization': 'Bearer my-token' };
        let result = await fetch(url,{headers});
        
        result = await result.json();
    
        setCars(result);
    
      };
    
      useEffect(() => {
        Mydata();
      }, []);




    return(
        <SafeAreaView
         style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
         {/* <ScrollView showsVerticalScrollIndicator={false}> */}
           <View style={{flexDirection: 'row', marginTop: 40}}>
             <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
               CARS
             </Text>
             <Text
               style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
               24
             </Text>
           </View>
           <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                horizontal={false}
                data={data}
                renderItem={({item}) => (
        //   <Card car={item} />
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
       
        
    )

  }
  export default Mycar;