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



// const SelectedProducts = () => {
// const [selectedProducts, setSelectedProducts] = useState([]);

// useEffect(() => {
//   const fetchSelectedProducts = async () => {
//     try {
//       const token = await AsyncStorage.getItem('authToken');
//       console.log("token here",token)
//       if (!token) {
//         // Handle if the token is missing or expired
//         console.error('No valid token found.');
//         return;
//       }

// const response = await fetch('https://cars2-node-app.onrender.com/api/cars/', {
//   method:'GET',
//   headers: {
//     'Content-Type': 'application/json',
//      'Authorization': `Bearer ${token}`,
//     // Authorization: `Bearer <token>`,
//   },       
// });
// response = await response.json();
// JSON.parse(JSON.stringify(response));
// console.log("response is",response)   

//       if (!response.ok) {
//         // Handle unauthorized or other error responses
//         console.error('Error fetching selected products:', response);
//         return;
//       }

//       const data = await response.json();
//       setSelectedProducts(data);
//     } catch (error) {
//       // Handle any errors, such as network issues, etc.
//       console.error('Error fetching selected products:', error);
//     }
//   };

//   fetchSelectedProducts();
// }, []);

//   return (


//     <View>
//       {selectedProducts.map((product) => (
//         <Text key={product.id}>{product.carname}</Text>
//       ))}
//     </View>
//   );
// };

// export default SelectedProducts;



// const Mydata = async () => {
//     const url = 'https://cars2-node-app.onrender.com/api/cars/';
//     const token = await AsyncStorage.getItem('authToken');
//     console.log("token : ",token);

//     const result = await fetch(url,{
//         method: 'GET',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer' + token,
//         },
//       },
//     );
//     console.log("tesdtt",result);
//     // const headers = { 
//     //   // 'Content-Type': 'application/json',
//     //   'Authorization': 'Bearer' + token 
//     // };
//     // let result = await fetch(url,{headers});
//     // result = await result.json();

//     // // console.log("sam caleb", JSON.stringify(result));
//     // console.log("tesdtt",result)
//     setCars(result);


//   };
const Mycar = ({ navigation }) => {
  const [data, setData] = useState([]);
  const Mydata = async () => {
    const url = 'https://cars2-node-app.onrender.com/api/cars/';
    const token = await AsyncStorage.getItem('authToken');
    console.log("token", url, token, token?.accessToken);
    //   try {
    //     fetch(url, {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/json',
    //        'Content-Type': 'multipart/form-data',
    //         'Authorization': 'Bearer ' + token
    //       },
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       console.log('responseJson : ',responseJson);  
    //       setData(responseJson);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   } catch (error) {
    //     console.log("res error message", error.message);
    //   }
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
export default Mycar;