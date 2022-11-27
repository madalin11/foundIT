import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import SimpleDocument from '../../Components/SimpleDocument'
import React from 'react'
import colors from '../../colors'
import { useState } from 'react'

const Home = ({navigation}) => {
    const [documents, setDocuments] = useState([
        {
            id: 1,
            name: "birth certificate"
        },
        {
            id: 2,
            name: "birth xxx"
        }
    ])
    const renderItem = ({ item }) => (
        <Item />
    );

    const Item = ({ name }) => (

        <View style={styles.item}>
            <Text>Aici</Text>
        </View>
    );

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Text style={styles.title}>Documents List</Text>
                <View style={styles.containerFlat}>
                    {documents.map((doc) => {
                        return <SimpleDocument key={doc.id} document={doc.name} navigation={navigation}/>
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    containerFlat: {
        backgroundColor: colors.BEIGE,
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    }
})