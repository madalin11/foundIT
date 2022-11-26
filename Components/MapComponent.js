// import { StyleSheet, Image, View, Dimensions } from 'react-native'
// import { useState, useEffect } from 'react';
// import MapView, { Polyline, Marker, MAP_TYPES } from 'react-native-maps';
// import { getRouteFromGoogle, convertRoutePathToLatLng } from '../utils/route-utils'
// import cityhall from '../assets/cityhall.png'
// import * as Location from 'expo-location';
// import React from 'react'

// const polyline = require('@mapbox/polyline');

// const { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;

// export const Navigation = () => {

//     const [location, setLocation] = useState(null);
//     const [polylinePoints, setPolylinePoints] = useState([])
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [region, setRegion] = useState(null);
//     const [pickupPoints, setPickupPoints] = useState([
//         { latitude: 46.33188180294243, longitude: 22.11581192960193 },
//         { latitude: 46.33015388445716, longitude: 22.119683962567226 },
//         { latitude: 46.3267679399131, longitude: 22.12345454503352 },
//         { latitude: 46.32382550065356, longitude: 22.12577100145808 }
//     ]);

//     useEffect(() => {

//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }
//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//             setRegion({ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0922 * ASPECT_RATIO });
//             const route = await getRouteFromGoogle(pickupPoints[0], pickupPoints[pickupPoints.length - 1], pickupPoints.slice(1, -1))
//             const response = await route.json()
//             setPolylinePoints(convertRoutePathToLatLng(polyline.decode(response.routes[0].overview_polyline.points)))
//         })();
//     }, []);

//     let text = 'Waiting..';
//     if (errorMsg) {
//         text = errorMsg;
//     } else if (location) {
//         text = JSON.stringify(location);
//     }

//     const onPress = async () => {

//     }
//     return (
//         <View style={styles.view}>
//             <MapView
//                 provider={"google"}
//                 style={styles.map}
//                 initialRegion={region}
//             >
//                 <Polyline
//                     coordinates={polylinePoints}
//                     strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
//                     strokeWidth={3}
//                 />
//           {pickupPoints.map(pickupPoint => (
//             <View>
//               <Marker
//                 coordinate={pickupPoint}
//                 //pinColor='#339A3E'
//                 image={cityhall}
//               >
//                 <Image
//                 source={cityhall}
//                 />
//               </Marker>
//             </View>
//           ))}
//             </MapView>
//         </View>
//     )
// }

// export default Navigation

// const styles = StyleSheet.create({
//     view: {
//         flex: 1,
//         justifyContent: 'flex-end',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject
//     }
// })