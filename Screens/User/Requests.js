import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import RequestComponent from '../../Components/RequestComponent';


const Requests = ({ navigation }) => {

  const [requests, setRequest] = useState([
    {
      id: 1,
      documentName: "ID Card",
      institutionName: "city hall",
      day: 12,
      mounth: 12,
      year: 2010,
      hour: 16,
      minutes: 30,
      status: "Accepted"
    },
    {
      id: 2,
      documentName: "ID Card",
      institutionName: "city hall",
      day: 12,
      mounth: 12,
      year: 2010,
      hour: 16,
      minutes: 30,
      status: "Rejected"
    }
  ])

  return (


    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.titleContainer}>Requests</Text>
        <ScrollView>
          {requests.map((item) => {
            return <RequestComponent
              key={item.id}
              docName={item.documentName}
              institutionName={item.institutionName}
              id={item.id}
              day={item.day}
              mounth={item.mounth}
              year={item.year}
              hour={item.hour}
              minutes={item.minutes}
              status={item.status}
            />
          })}


        </ScrollView>
        <TouchableOpacity
          raised onPress={() => navigation.navigate("Create request screen")}
        >
          <Image source={require('../../assets/create.png')} style={{ alignSelf: 'flex-end', width: 70, height: 70, marginTop: -30, marginRight: 15 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Requests

const styles = StyleSheet.create({
  container:{
    justifyContent:'space-around',
    padding: 12,
    //alignItems: 'center',
    //width: '90%'
  },
  titleContainer: {
    justifyContent: "flex-start",
    fontSize: 40,
    fontFamily: "Times New Roman",
    shadowOpacity: 0.2
  },
})