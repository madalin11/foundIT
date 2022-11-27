import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Linking, Text } from 'react-native'
import { useState, useEffect } from 'react';
import NavigationImage from "../assets/navigation.png"
import MapView, { Polyline, Marker, MAP_TYPES } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import colors from '../colors';
import cityhall from '../assets/cityhall.png'
import clock from '../assets/clock.png'
import doc from '../assets/doc.png'
import navigate from '../assets/navigate-icon.png'
import { Request } from '../Screens/User/Requests'
import React from 'react'

const polyline = require('@mapbox/polyline');

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

export const Map = (props) => {
    const [location, setLocation] = useState(props.location);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({ latitude: props.location.x, longitude: props.location.y, latitudeDelta: 0.0022, longitudeDelta: 0.0922 * ASPECT_RATIO });

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const navigateMap = async () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${props.location.x},${props.location.y}`;
        const label = 'Custom Label';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });

        // const navigateMap = () => {
        //     props.navigation.navigate("BigMap")
        // }

        Linking.openURL(url);
    }

    const makeAnAppointment = () => {
        props.navigation.navigate("Create request screen", {
            institutionName: props?.locationName,
            docId : props?.docId,
            documentName: props?.documentName
        }
        )
    }


    return (
        <View style={styles.mapContainer}>
            <View style={styles.navigationContainer}>
                <View style={styles.document}>
                    {/* <Text style={styles.text}>{props.documentName}</Text> */}
                    <Text style={styles.text}>{props.locationName}</Text>
                </View>
            </View>
            <MapView
                provider={"google"}
                style={styles.map}
                mapType={MAP_TYPES.SATELLITE}
                initialRegion={region}
                scrollEnabled={false}
                
            >
                <View>
                    <Marker
                        coordinate={{ longitude: location.y, latitude: location.x }}
                        pinColor='#339A3E'
                    //image={cityhall}
                    >
                        <Image
                            source={cityhall}
                            style={{ width: 30, height: 30 }}
                            resizeMode="contain"
                        />
                    </Marker>
                </View>
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.mapButton}
                    onPress={makeAnAppointment}
                >
                    <View style={styles.appointment}>
                        <Image
                            source={clock}
                            style={{ width: 30, height: 30, color: 'white' }}
                            resizeMode="contain"
                        />
                        <Text style={{ color: 'black' }}> Appointment</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mapButton}
                    onPress={navigateMap}
                >
                    <View style={styles.appointment}>
                        <Image
                            source={navigate}
                            style={{ width: 30, height: 30, color: 'white' }}
                            resizeMode="contain"
                        />
                        <Text style={{ color: 'black' }}> Navigate</Text>
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    mapContainer: {
        backgroundColor: colors.TAB_COLOR,
        height: 200,
        //flexDirection: 'column',
        overflow: "hidden",
        width: '100%',
    },
    directionButton: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapButton: {
        backgroundColor: colors.BLUE,
        //marginRight: 10,
        margin: 5,
        //alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 15,
        padding: 5
    },
    overMapButton: {
        alignItems: 'flex-end',
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    document: {
        // backgroundColor: colors.GREEN,
        flexDirection: 'row',
        margin: 3,
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
    },
    text: {
        color: colors.PURPLE_TRANSPARENT,
        fontSize: 18,
        textAlign: 'center',
        margin: 5
    },
    appointment: {
        flexDirection: 'row',
        //justifyContent: 'space-around',
        alignItems: 'center',
    }

})