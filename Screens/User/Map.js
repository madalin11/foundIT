import { StyleSheet, View, Dimensions, TouchableOpacity, Text, Linking} from 'react-native'
import { useState, useEffect } from 'react';
import MapView, { Polyline, Marker, MAP_TYPES } from 'react-native-maps';
import { getRouteFromGoogle, convertRoutePathToLatLng } from "../../utils/route-utils"
//import trashcan from '../../Icons/trash-can.png'
import * as Location from 'expo-location';
import React from 'react'

const polyline = require('@mapbox/polyline');

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

export const Map = () => {

    const [location, setLocation] = useState({ latitude: 46.33188180294243, longitude: 22.11581192960193 });
    const [polylinePoints, setPolylinePoints] = useState([])
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({ latitude: 46.33015388445716, longitude: 22.119683962567226, latitudeDelta: 0.2922, longitudeDelta: 0.0922 * ASPECT_RATIO });
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
    return (
        <View style={styles.mapContainer}>
            <MapView
                provider={"google"}
                style={styles.map}
                initialRegion={region}
            >
                <Polyline
                    coordinates={polylinePoints}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={3}
                />
                {pickupPoints.map(pickupPoint => (
                    <View>
                        <Marker
                            coordinate={pickupPoint}
                        //pinColor='#339A3E'
                        //image={trashcan}
                        >
                            {/* <Image
                source={trashcan}
                /> */}
                        </Marker>
                    </View>
                ))}
                <TouchableOpacity style={styles.button}
                    onPress={() => navigateMap()}
                >
                    <Text>Maps</Text>
                </TouchableOpacity>
            </MapView>

        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    map: {
        flex: 1
    },
    button: {
        padding: 50
    },
    mapContainer: {
        height: 200,
        bottom: 10,
        margin: 10,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 45,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: "hidden",
    },
})