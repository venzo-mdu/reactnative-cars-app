import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';
import {Navigation} from 'react-native-navigation';


const STYLES = StyleSheet.create({
    inputContainer: {flexDirection: 'row', marginTop: 20},
    inputIcon: {marginTop: 15,width:30,height:20,position: 'absolute'},
    input: {
        color: COLORS.light,
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,
      },
      btnPrimary: {
        // backgroundColor: COLORS.primary,
        height: 60,
        
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        fontSize:70,
        
      },
      line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
      btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
      },
      btnImage: {width: 30, height: 20, marginLeft: 5},
      tickImage:{
        marginTop:200,
        marginLeft:130,
      },
      home:{
       height:150,
       width:200,
       marginTop:250,
       marginLeft:170,
      },


});

export default STYLES;