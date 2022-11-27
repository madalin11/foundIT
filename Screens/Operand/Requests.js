import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import OperandRequestComponent from '../../Components/OperandRequestComponent';
import { db } from '../../firebase'

const Requests = ({ navigation }) => {

  const [appointments, setAppointments] = useState([]);
  //const temp = auth?.currentUser?.uid;

  async function changeStatus(id, state) {

    await db.collection("appointments").doc(id).update({
      status: state,
    })
  }

  useEffect(() => {
    const unsubscribe = db
      .collection("appointments")
      .onSnapshot(snapshot => {
        setAppointments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
      }
      )
    return unsubscribe;
  }, [db])

  const date = new Date()

  function filterZZZ(element) {
    try {
      if (element.data.name == '') {
        return false;
      }
      try {

        if (element.data.name.toLowerCase().includes(searchText.toLowerCase()))
          return true;

      } catch (err) {

      }
      return false
    } catch (err) {

    }
    return true
  }

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
      status: "In progress"
    }
  ])

  return (


    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>Requests</Text>
        <ScrollView>
          {appointments.map((item) => {
            return <OperandRequestComponent
              key={item.id}
              docName={item.data.documentName}
              institutionName={item.data.institution}
              id={item.id}
              day={new Date().getDay()}
              mounth={new Date().getMonth()}
              year={new Date(item.data.date.seconds).getFullYear()+ 52}
              hour={item.data.hour}
              //minutes={new Date(item.data.date.seconds).getMinutes()}
              status={item.data.status}
              changeStatus={changeStatus}
            />
          })}


        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Requests

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
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