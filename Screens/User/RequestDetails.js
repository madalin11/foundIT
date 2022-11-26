import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CalendarStrip from 'react-native-calendar-strip';

const RequestDetails = () => {
  const today = new Date();

  const setPickupDate = (date) => {
    console.log(date)
  }
  const setHour = (date) => {
    console.log(date)
  }

  const [availableHours, setAvailableHours] = useState([
    {
      id: 1,
      hour: "9",
      isAvailable: true
    },
    {
      id: 2,
      hour: "10 am",
      isAvailable: true
    },
    {
      id: 3,
      hour: "11 am",
      isAvailable: true
    },
    {
      id: 4,
      hour: "12 am",
      isAvailable: true
    },
    {
      id: 5,
      hour: "11 am",
      isAvailable: true
    },
    {
      id: 6,
      hour: "12 am",
      isAvailable: true
    },
    {
      id: 7,
      hour: "11 am",
      isAvailable: true
    }
  ])


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Institution</Text>
      </View>
      <View>
        <Text style={styles.title}>Date</Text>
      </View>
      <View style={styles.calendar}>
        <CalendarStrip
          style={styles.calendarContainer}
          calendarHeaderStyle={styles.calendarHeaderStyle}
          dayContainerStyle={styles.dayContainerStyle}
          numDaysInWeek={7}
          highlightDateNameStyle={styles.selectedDate}
          highlightDateNumberStyle={styles.selectedDate}
          selectedDate={today}
          showMonth={true}
          scrollable={true}
          onDateSelected={(date) => setPickupDate(date)}
        />
      </View>
      <View style={styles.hourPicker}>
        <Text>
          Choose Time
        </Text>
        <ScrollView horizontal={true} >
          {availableHours.map(hour => {
            return <TouchableOpacity style={styles.hour} key={hour.id} onPress= {()=>setHour(hour.hour)}>
              <Text>{hour.hour}</Text>
            </TouchableOpacity>
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default RequestDetails

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendar: {
    marginTop: 60,
    width: '100%',
    bottom: 100
  },
  calendarContainer: {
    height: 160,
    paddingTop: 50,
    paddingBottom: 10,
  },
  calendarHeaderStyle: {
    color: 'green',
  },
  dayContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    width: 50,

  },
  hour: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginHorizontal: 5,
    width: 50,
    height: 50
  },
  selectedDate: {
    color: 'red',
    justifyContent: 'center'
  },
  hourPicker: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 60,
    //backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    alignItems: 'flex-start'
  }
})