import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import Toast from 'react-native-root-toast';
import React from 'react'
import { useState } from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import cityhall from '../../assets/primaria.png'
import clock from '../../assets/clock.png'
import colors from "../../colors"
import { auth, db } from "../../firebase"
const CreateRequest = (props) => {
    const today = new Date();
    const [calendarColor, setCalendarColor] = useState('green')
    const [userName, setUserName] = useState(auth?.currentUser?.displayName)
    const [userId, setUserId] = useState(auth?.currentUser?.uid)
    const [hour, setHour] = useState(0)
    const [date, setDate] = useState(0)
    const [institutionName, setInstitutionName] = useState(props.route.params?.institutionName)
    const setPickupDate = (date) => {
        console.log(new Date(date))
        setDate(new Date(date))
    }
    const setxHour = (id) => {
        console.log(availableHours.flat().filter((item) => item.id === id)[0])
        setHour(availableHours.flat().filter((item) => item.id === id)[0].hour)
    }
    async function addAppointment() {
        await db.collection("appointments").doc(makeid(10)).set({
            email: userName.toLowerCase().replace(/\s/g, '') + "@gmail.com",
            hour: hour,
            date: date,
            username: userName,
            userId: userId,
            institution: institutionName,
            status: 'In progress',
            documentId: props.route.params?.docId,
            documentName: props.route.params?.documentName

        }).then(() => {
            console.log("Appointment successfuly added");
        }).catch((error) => alert(error));

        props.navigation.navigate("Home");
    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const makeApp = async () => {
        const body = {
            email: "daraualexandru@gmail.com",
            hour: hour,
            date: date,
            username: userName,
            institution: institutionName
        }
        const fetchResult = await fetch("http://localhost:3000", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        //console.log("🚀 ~ file: RequestDetails.js ~ line 26 ~ makeApp ~ const", fetchResult)
        Toast.show('Appointment created', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM
        })
        setTimeout(function () {
            props.navigation.navigate('Home')
        }, 500);
    }

    const [availableHours, setAvailableHours] = useState([
        [{
            id: 1,
            hour: "08:00",
            isAvailable: true,
            isPressed: false
        },
        {
            id: 2,
            hour: "08:30",
            isAvailable: true,
            isPressed: false
        },
        {
            id: 3,
            hour: "09:00",
            isAvailable: false,
            isPressed: false
        },
        {
            id: 4,
            hour: "09:30",
            isAvailable: false,
            isPressed: false
        }],
        [{
            id: 5,
            hour: "10:00",
            isAvailable: true,
            isPressed: false
        },
        {
            id: 6,
            hour: "10:30",
            isAvailable: false
        },
        {
            id: 7,
            hour: "11:00",
            isAvailable: true,
            isPressed: false
        },
        {
            id: 8,
            hour: "11:30",
            isAvailable: true,
            isPressed: false
        },
        ],
        [{
            id: 9,
            hour: "12:00",
            isAvailable: true,
            isPressed: false
        },
        {
            id: 10,
            hour: "12:30",
            isAvailable: true,
            isPressed: false
        },
        {
            id: 11,
            hour: "13:00",
            isAvailable: true,
            isPressed: false
        },
        {
            id: 12,
            hour: "13:30",
            isAvailable: true,
            isPressed: false
        }],
        [
            {
                id: 13,
                hour: "14:00",
                isAvailable: true,
                isPressed: false
            },
            {
                id: 14,
                hour: "14:30",
                isAvailable: true,
                isPressed: false
            },
            {
                id: 15,
                hour: "15:00",
                isAvailable: true,
                isPressed: false
            },
            {
                id: 16,
                hour: "15:30",
                isAvailable: true,
                isPressed: false
            }]
    ])

    // availableHours.map(hours => {
    //   return hours.map(hour => {
    //     console.log(hour)
    //   }))


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity style={{ marginTop: 100 }} onPress={() => props?.navigation.goBack()}>
                    <Text>
                        back
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Institution: {institutionName} </Text>
                </View>
                <View>
                    <Image
                        source={cityhall}
                        style={{ width: 428, height: 200 }}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <View>
                <View style={styles.calendar}>
                    <View styles={styles.dateText}>
                        <Text style={styles.title}>Date</Text>
                    </View>
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
                        onDateSelected={(date) => {setPickupDate(date); setCalendarColor("white")}}
                    />

                </View>
            </View>
            <View style={styles.hourPicker}>
                <ScrollView horizontal={true} >
                    {availableHours.map(hours => {
                        return (
                            <View>
                                {hours.map(hour => {
                                    return <TouchableOpacity style={[styles.hour, { backgroundColor: hour.isAvailable ? 'green' : 'red' }]} key={hour.id} onPress={() => setxHour(hour.id)}>
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
                    onPress={()=>{addAppointment();  makeApp()} } //
                >
                    <View style={styles.appointment}>
                        <Image
                            source={clock}
                            style={{ width: 30, height: 30, color: 'white' }}
                            resizeMode="contain"
                        />
                        <Text style={{ color: 'black' }}>   Create Appointment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CreateRequest

const styles = StyleSheet.create({
    container: {
        padding: 12,
        //marginTop: 60,
        flex: 6,
        //alignItems: 'center',
        justifyContent: 'space-beteween',
        width:'100%'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appointment: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarContainer: {
        height: 130,
        //paddingTop: 50,
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
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 40
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
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
        //height: 60,
        //backgroundColor: 'black'
    },
    buttonContainer: {
        top: 30,
        padding: 60
        // justifyContent: 'space-around'
    },
    calendar: {
        top: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        alignItems: 'flex-start'
    },
    dateText: {
        justifyContent: 'flex-start'
    }
})