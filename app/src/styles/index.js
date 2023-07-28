import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';
import {Navigation} from 'react-native-navigation';

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 20},
  inputIcon: {marginTop: 15, width: 30, height: 20, position: 'absolute'},
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,

    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  extra: {
    color: COLORS.light,
    paddingLeft: 20,
    // borderBottomWidth: 1,
    borderColor: COLORS.primary,
    borderWidth: 1.9,
    // borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 15,
    height: 40,

    marginTop: 20,
  },
  btnPrimary: {
    // backgroundColor: COLORS.primary,
    height: 60,

    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontSize: 70,
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
  tickImage: {
    marginTop: 200,
    marginLeft: 130,
  },
  home: {
    height: 150,
    width: 200,
    marginTop: 200,
    marginLeft: 170,
  },
  btnnew: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 19,
    height: 45,
    width: 100,
  },
  sell: {
    // height: ,
    // marginTop: 200,
    marginRight: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 19,
    height: 45,
    width: 100,
  },
  sellbtn: {
    textAlign: 'center',

    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  buy: {
    textAlign: 'center',

    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  buybtn: {
    marginTop: 200,
    marginRight: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 19,
    height: 45,
    width: 100,
  },
  bg: {marginTop: 400, width: 450, marginLeft: -230},
  book:{
    height: 60,

    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    fontSize: 70,
  },
  done:{
    height: 60,
    marginTop:-10,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:190,
    fontSize: 70,

  }
});

export default STYLES;
