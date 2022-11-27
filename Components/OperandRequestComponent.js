import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'



const RequestComponent = ({ docName, institutionName, changeStatus, id, day, mounth, year, hour, minutes, status }) => {

    return (
        <View key={id} style={{
            backgroundColor: colors.BEIGE,
            marginVertical: 10,
        }}>
            <View style={styles.container}>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.dateFormat}>
                        {day}/{mounth}/{year}
                    </Text>
                </View>
                <View style={{ flex: 1, alignContent: 'center' }}>
                    <Text style={{
                        fontFamily: 'Arial',
                        fontWeight: '400',
                        fontSize: 20,
                    }}>
                        {hour}
                    </Text>
                </View>
                <View style={{
                    backgroundColor: status == 'Accepted' ? 'green' : (status == 'In progress' ? '#C4C4C4' : (status == 'Rejected' ? 'red' : 'white')),
                    borderRadius: 20,
                    top: 1
                }}>
                    <Text style={{
                        marginHorizontal: 10,
                        marginVertical: 3,
                        fontFamily: 'Arial',
                        fontSize: 16,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        color: 'white'
                    }}>
                        {status}
                    </Text>
                </View>
            </View>
            <View>

                <View style={styles.container}>
                    <Image source={require('../assets/from_to.png')} style={{ width: 35, height: 35, marginTop: 1 }} resizeMode='contain' />
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginRight: 3, fontFamily: 'Arial', color: '#B2B2B2', fontSize: 16, fontWeight: '400' }}>
                                Document:
                            </Text>
                            <Text style={{ fontFamily: 'Arial', fontSize: 16, fontWeight: '600' }}>
                                {docName}
                            </Text>
                        </View>


                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 4, marginRight: 3, fontFamily: 'Arial', color: '#B2B2B2', fontSize: 16, fontWeight: '400' }}>
                                Institution:
                            </Text>
                            <Text style={{ marginTop: 4, fontFamily: 'Arial', fontSize: 16, fontWeight: '600' }}>
                                {institutionName}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container1}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'rgba(20, 124, 229, 0.8)',
                            borderBottomLeftRadius: 10,
                            paddingTop: 7,
                            
                        }}>
                            <TouchableOpacity onPress={()=>changeStatus(id, "Accepted")}>
                                {/* <Image
                                    style={{ tintColor: 'blue', alignSelf: 'center', width: 24, height: 24, borderRadius: 50 }}
                                    source={require('../iconsOurDent/inprogress.png')}
                                /> */}
                                <Text style={{ alignSelf: 'center', paddingBottom: 7 }}>
                                    Accept
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'rgba(255, 15, 15, 0.8)',
                            paddingTop: 7,
                            borderBottomRightRadius: 10,
                            
                        }}>
                            <TouchableOpacity onPress={()=>changeStatus(id, "Rejected")}>
                                {/* <Image
                                    style={{ tintColor: 'green', alignSelf: 'center', width: 24, height: 24, borderRadius: 50 }}
                                    source={require('../iconsOurDent/done.png')}
                                /> */}
                                <Text style={{ alignSelf: 'center', paddingBottom: 7 }}>
                                    Decline
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

        </View>

    )
}

export default RequestComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    dateFormat: {
        fontFamily: 'Arial',
        fontWeight: '500',
        fontSize: 20,
    },
    container1: {
        flex: 1,
        borderBottomLeftRadius: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomRightRadius: 10,
    }

})