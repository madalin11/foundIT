import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from "lottie-react-native";
import { Platform } from 'react-native'
import colors from '../../colors'

const Splash = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Get started screen");
            console.log('This will run after 4 second!')
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={styles.container}>
            {Platform.OS != 'web' ?
                <LottieView style={styles.animation} source={require("../../icons/splash.json")} autoPlay loop />
                : null}
            <Text style={styles.text}>
                Find it
            </Text>

            {Platform.OS != 'web' ?
                <LottieView style={{ height: 40 }} source={require("../../icons/loading.json")} autoPlay loop />
                : null}
        </View>


    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 240,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    animation: {
        height: '100%',
        maxHeight: 300,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    text: {
        fontFamily: 'Times New Roman',
        fontSize: 60,
        fontWeight: 'bold',
        color: colors.GREEN_COLOR,
        paddingVertical: 60,
        shadowOpacity: 0.4,
        shadowOffset: { height: 2 },
        shadowRadius: 2,
        alignSelf: 'center'

    },
    cirlce: {
        height: 30,
        width: 30,
    }
})