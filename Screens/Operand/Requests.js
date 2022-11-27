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
          {appointments.filter(filterZZZ).map((item) => {
            return <OperandRequestComponent
              key={item.id}
              docName={item.data.documentName}
              institutionName={item.data.institutionName}
              id={item.id}
              day={item.data.date.slice(9,11)}
              mounth={11}
              year={item.data.date.slice(14,18)}
              hour={item.data.hour.slice(1,3)}
              minutes={item.data.hour.slice(4,6)}
              status={item.status}
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