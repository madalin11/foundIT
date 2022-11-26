import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import RequestComponent from '../../Components/RequestComponent';


const Requests = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Requests</Text>
      <ScrollView>
        

          <RequestComponent
            key={1}
            docName={"buletin"}
            institutionName={"tibi"}
            id={29}
            day={12}
            mounth={2}
            year={2010}
            hour={16}
            minutes={30}
            status={"Accepted"}
          />
            <View style={{marginBottom:12}}>

            </View>
          <RequestComponent
            key={2}
            docName={"buletin"}
            institutionName={"tibi"}
            id={29}
            day={12}
            mounth={2}
            year={2010}
            hour={16}
            minutes={30}
            status={"Accepted"}
          />

        
      </ScrollView>
      <TouchableOpacity
        raised onPress={() => navigation.navigate("Create request screen")}
      >
        <Image source={require('../../assets/create.png')} style={{ alignSelf: 'flex-end', width: 70, height: 70, marginTop: -30, marginRight: 15 }} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Requests

const styles = StyleSheet.create({})