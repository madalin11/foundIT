import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import cityhall from '../../assets/primaria.png'
import colors from "../../colors"
const RequestDetails = () => {
  const today = new Date();

  const setPickupDate = (date) => {
    console.log(date)
  }
  const setHour = (date) => {
    console.log(date)
  }

  const makeApp = async () => {
    const fetchResult = await fetch("http://localhost:3000", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"email": "daraualexandru@gmail.com"})
    });
    //console.log("🚀 ~ file: RequestDetails.js ~ line 26 ~ makeApp ~ const", fetchResult)
  }

  const [availableHours, setAvailableHours] = useState([
    [{
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
    }],
    [{
      id: 1,
      hour: "9",
      isAvailable: true
    },
    {
      id: 2,
      hour: "10 am",
      isAvailable: false
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
    ],
    [{
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
    }],
    [
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
      }]
  ])

  // availableHours.map(hours => {
  //   return hours.map(hour => {
  //     console.log(hour)
  //   }))


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Institution: City Hall</Text>
      </View>
      <View>
        <Image
          source={cityhall}
          style={{ width: "100%", height: 200 }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.title}>Date</Text>

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
      </View>
      <View style={styles.hourPicker}>
        <Text>
          Choose Time
        </Text>
        <ScrollView horizontal={true} >
          {availableHours.map(hours => {
            return (
              <View>
                {hours.map(hour => {
                  return <TouchableOpacity style={styles.hour} key={hour.id} onPress={() => setHour(hour.hour)}>
                    <Text>{hour.hour}</Text>
                  </TouchableOpacity>
                })}
              </View>
            )
          })}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.mapButton}
          onPress={makeApp}
        >
          <View style={styles.appointment}>
            <Image
              source={cityhall}
              style={{ width: 30, height: 30, color: 'white' }}
              resizeMode="contain"
            />
            <Text style={{ color: 'black' }}>Create Appointment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RequestDetails

const styles = StyleSheet.create({
  container: {
    padding: 12,
    //marginTop: 60,
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'space-around'
  },
  appointment: {
    flexDirection: 'row'
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
    backgroundColor: colors.GREEN,
    borderRadius: 10,
    margin: 5,
    //padding: 20,
    width: 50,
    height: 50
  },
  selectedDate: {
    color: colors.GREEN,
    justifyContent: 'center'
  },
  mapButton: {
    backgroundColor: colors.BLUE,
    padding: 15,
    top: 40,
    justifyContent: 'center',
    height: 40,
    borderRadius: 15,
    padding: 5
  },
  hourPicker: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    //height: 60,
    //backgroundColor: 'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 20,
    alignItems: 'flex-start'
  }
})