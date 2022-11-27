import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const SimpleDocument = (props) => {

    const { document } = props;
    const doIt = (navigation) => {
        navigation.navigate("Documents", {
            name: document
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => doIt(props.navigation)}>
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
            marginHorizontal: 10,
            marginTop: 10,
            },
    text: {
        fontSize: 20
    }
})

export default SimpleDocument;