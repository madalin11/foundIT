import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../colors';
import doc from '../assets/doc.png'


const SimpleDocument = (props) => {
    console.log(props)
    const { document } = props;
    const doIt = (navigation) => {
        navigation.navigate("Documents", {
            name: document
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => doIt(props.navigation)}>
                <View style={styles.item}>
                    <Image
                        source={props?.imageLink}
                        style={{ width: 30, height: 30, color: 'white', marginRight: 15 }}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>{document}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        //padding: 20,
        width: '100%',
        marginVertical: 2,
        marginHorizontal: 0,
        marginTop: 5,
    },
    text: {
        fontSize: 20,
        alignSelf:'flex-start'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.BLUE
    }
})

export default SimpleDocument;