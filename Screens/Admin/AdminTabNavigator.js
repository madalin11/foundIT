import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Documents from './Documents';
import { Button, Switch } from 'react-native-elements';
import Login from '../Login';

const AdminTabNavigator = () => {

    const screen = () => {
        switch (first) {
            case 0:
                return <Documents></Documents>
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;

            default: 0
                break;
        }


        return <Documents></Documents>;
    }


    const [first, setfirst] = useState(0);
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>
                        Tibi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>
                        Tibi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>
                        Tibi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>
                        Tibi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>
                        Tibi
                    </Text>
                </TouchableOpacity>
            </View>

            {screen()}

        </SafeAreaView>
    )
}

export default AdminTabNavigator

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#202020'
    },
    text: {
        color: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    }
})