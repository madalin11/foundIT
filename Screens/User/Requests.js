import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import RequestComponent from '../../Components/RequestComponent';
import {auth,db} from '../../firebase'


const Requests = ({ navigation }) => {

    const [userUid, setUserUid] = useState(auth?.currentUser.uid);
    useEffect(() => {
        const unsubscribe = db
          .collection("appointments")
          .onSnapshot(snapshot => {
            setRequest(
              snapshot.docs.filter((elm) => (
                elm.data().userId === userUid)
              ).map((doc) => ({
                id: doc.id,
                data: doc.data()
              })))
          }
          )
        return unsubscribe;
      }, [db])
  const [requests, setRequest] = useState([])
  return (


    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.titleContainer}>Requests</Text>
        <ScrollView style={{height:'100%',marginTop:40}}>
          {requests.map((item) => {
            return <RequestComponent
              key={item.id}
              docName={item.data.documentName}
              institutionName={item.data.institution}
              id={item.id}
              day={23}
              mounth={11}
              year={new Date(item.data.date.seconds).getUTCFullYear()+52}
              hour={item.data.hour}
              minutes={''}
              status={item.data.status}
            />
          })}


        </ScrollView>
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