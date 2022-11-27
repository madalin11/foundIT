import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'



const RequestComponent = ({ docName, institutionName, id, day, mounth, year, hour, minutes, status }) => {

    return (
        <View key={id} style={{
            backgroundColor: colors.BEIGE,
            marginVertical: 10,
        }}>
            <View style={styles.container}>

                <View style={{ flex: 1, top: 2, flexDirection: 'row' }}>
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
                        {hour}:{minutes}
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
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ marginRight: 3, fontFamily: 'Arial', color: '#B2B2B2', fontSize: 16, fontWeight: '400' }}>
                            Document: 
                        </Text>
                        <Text style={{ fontFamily: 'Arial', fontSize: 16, fontWeight: '600' }}>
                                {docName}
                            </Text>
                        </View>
                        

                        <View style={{flexDirection:'row'}}>
                            <Text style={{ marginTop: 4, marginRight:3, fontFamily: 'Arial', color: '#B2B2B2', fontSize: 16, fontWeight: '400' }}>
                                Institution:
                            </Text>
                            <Text style={{ marginTop: 4, fontFamily: 'Arial', fontSize: 16, fontWeight: '600' }}>
                                {institutionName}
                            </Text>
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

})