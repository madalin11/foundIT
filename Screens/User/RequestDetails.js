import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CalendarStrip from 'react-native-calendar-strip';

const RequestDetails = () => {  
  const today = new Date();

  const setPickupDate = () => {

  }

  return (
    <View style={styles.container}>
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
  )
}

export default RequestDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  calendar: {
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
  selectedDate: {
    color: 'red'
  },
})