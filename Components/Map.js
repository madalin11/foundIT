import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Linking, Text } from 'react-native'
import { useState, useEffect } from 'react';
import NavigationImage from "../assets/navigation.png"
import MapView, { Polyline, Marker, MAP_TYPES } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import colors from '../colors';
import cityhall from '../assets/cityhall.png'
import clock from '../assets/clock.png'
import navigate from '../assets/navigate-icon.png'
import {Request} from '../Screens/User/Requests'
import React from 'react'

const polyline = require('@mapbox/polyline');

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

export const Map = (props) => {
    console.log(props)
    const [location, setLocation] = useState(props.location);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({ latitude: 46.33015388445716, longitude: 22.119683962567226, latitudeDelta: 0.0022, longitudeDelta: 0.0922 * ASPECT_RATIO });
    const [pickupPoints, setPickupPoints] = useState([
        { latitude: 46.33188180294243, longitude: 22.11581192960193 },
        { latitude: 46.33015388445716, longitude: 22.119683962567226 },
    ]);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const navigateMap = async () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${46.33188180294243},${22.11581192960193}`;
        const label = 'Custom Label';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });


        Linking.openURL(url);
    }

    const makeAnAppointment = () => {
        props.navigation.navigate("RequestsDetails")
    }
    

    return (
        <View style={styles.mapContainer}>
            <View style={styles.navigationContainer}>
                <Text style={styles.text}>{props.documentName}</Text>
                <TouchableOpacity style={styles.overMapButton}
                    onPress={navigateMap}
                >
                    <Image
                        source={navigate}
                        style={{ width: 30, height: 30, color: 'white' }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <MapView
                provider={"google"}
                style={styles.map}
                mapType={MAP_TYPES.SATELLITE}
                initialRegion={region}
            >
                <Polyline
                    coordinates={pickupPoints}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={3}
                />
                <View>
                    <Marker
                        coordinate={location}
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
                    onPress={() => {props.seeNecesarDocuments()}}
                >
                    <Text style={{ color: 'black' }}>See Necessar Documents</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mapButton}
                    onPress={makeAnAppointment}
                >
                    <View style={styles.appointment}>
                    <Image
                        source={clock}
                        style={{ width: 30, height: 30, color: 'white' }}
                        resizeMode="contain"
                    />
                    <Text style={{ color: 'black' }}>Make an appointment</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    mapContainer: {
        height: 200,
        //flexDirection: 'column',
        overflow: "hidden",
    },
    directionButton: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapButton: {
        backgroundColor: colors.YELLOW,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },
    overMapButton: {
        alignItems: 'flex-end',
        padding: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.BEIGE
    },
    image: {
        // width: 40,
        // height: 40,
    },
    text: {
        color: colors.PURPLE_TRANSPARENT,
        fontSize: 18
    },
    appointment: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    }

})