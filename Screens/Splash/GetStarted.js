import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

const GetStarted = ({navigation}) => {
  const goLogin = (path) =>{
    navigation.navigate("Login screen");
  }
  const goRegister = (path) =>{
    navigation.navigate("Register screen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
            source={require('../../icons/get.png')}
            style={{height:300,width:300}}
            />
      <TouchableOpacity onPress={goRegister} style={{marginTop:60}}>
        <Text style={styles.startText} >Get started</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goLogin} style={{marginTop:110}}>
        <Text style={styles.loginText} >Did you have already an account?</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default GetStarted
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 240,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  animation: {
    height: '100%',
    maxHeight: 300,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  startText:{
    fontFamily:'Times New Roman',
    fontSize:40,
    fontWeight:'bold',
    color:'#3399FF',
    shadowColor:'#202020',
    shadowOpacity:0.7,
    shadowOffset:{height:1},
    shadowRadius:2
  },
  loginText:{
    fontFamily:'Times New Roman',
    fontSize:20,
    fontWeight:'600',
    color:'#202020',
    shadowColor:'#202020',
    shadowOpacity:0.7,
    shadowOffset:{height:1},
    shadowRadius:7,
    textDecorationLine:'underline'
  }
})