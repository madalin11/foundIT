import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Linking, Text, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react';
import navigate from "../../assets/navigation.png"
import MapView, { Polyline, Marker, MAP_TYPES } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import colors from '../../colors';
import cityhall from '../../assets/cityhall.png'
import clock from '../../assets/clock.png'
import doc from '../../assets/doc.png'
import { getRouteFromGoogle, convertRoutePathToLatLng } from '../../utils/route-utils.js'
import { Request } from '../User/Requests'
import React from 'react'

const polyline = require('@mapbox/polyline');

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

export const BigMap = (props) => {
    const [location, setLocation] = useState({ latitude: 45.75106099882554, longitude: 21.22633014545415 });
    const [userLocation, setUserLocation] = useState({ latitude: 45.723061421016105, longitude: 21.23663865251027 });
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({ latitude: 45.75106099882554, longitude: 21.22633014545415, latitudeDelta: 0.0022, longitudeDelta: 0.0922 * ASPECT_RATIO });
    const [pickupPoints, setPickupPoints] = useState([
        { latitude: 46.33188180294243, longitude: 22.11581192960193 },
        { latitude: 46.33015388445716, longitude: 22.119683962567226 },
    ]);

    useEffect(() => {

        (async () => {
            const route = await getRouteFromGoogle(location, userLocation)
            const response = await route.json()
            console.log("🚀 ~ file: BigMap.js ~ line 36 ~ response", response)
            setPickupPoints(convertRoutePathToLatLng(polyline.decode(response.routes[0].overview_polyline.points)))
        })();
    }, []);
    const points = getRouteFromGoogle(location, userLocation)
    console.log("🚀 ~ file: BigMap.js ~ line 31 ~ BigMap ~ points", points)

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
        // props.navigation.navigate("RequestsDetails")
    }


    return (
        <SafeAreaView>
            <View style={styles.mapContainer}>
                <View style={styles.navigationContainer}>
                    <View style={styles.document}>
                        <Text style={styles.text}>{props.documentName}</Text>
                    </View>
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
                        strokeColor={colors.BLUE} // fallback for when `strokeColors` is not supported by the map-provider
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
                    <View>
                        <Marker
                            coordinate={userLocation}
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
                        onPress={() => { props.seeNecesarDocuments() }}
                    >
                        <View style={styles.appointment}>
                            <Image
                                source={doc}
                                style={{ width: 30, height: 30, color: 'white' }}
                                resizeMode="contain"
                            />
                            <Text style={{ color: 'black' }}> Documents</Text>
                        </View>
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
                            <Text style={{ color: 'black' }}> Appointment</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BigMap

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    mapContainer: {
        height: '100%',
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
        backgroundColor: colors.BLUE,
        //marginRight: 10,
        margin: 5,
        //alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        borderRadius: 15,
        padding: 5
    },
    overMapButton: {
        alignItems: 'flex-end',
        padding: 2
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
        backgroundColor: colors.GREEN,
        margin: 3,
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
    },
    text: {
        color: colors.PURPLE_TRANSPARENT,
        fontSize: 16,
        textAlign: 'center',
        margin: 5
    },
    appointment: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})