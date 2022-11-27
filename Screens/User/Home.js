import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import SimpleDocument from '../../Components/SimpleDocument'
import React from 'react'
import colors from '../../colors'
import { useState } from 'react'

const Home = ({ navigation }) => {
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
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.topViewContent}>
                <View>
                    <Text style={styles.title}>Hello, Aleps!</Text>
                    <Text style={styles.description}>What document you want to take today??</Text>
                </View>
                {/* <Image source={profile} style={styles.image} /> */}
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Documents List</Text>
                <View style={styles.containerFlat}>
                    {documents.map((doc) => {
                        return <SimpleDocument key={doc.id} document={doc.name} navigation={navigation} />
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    safeContainer: {
        flex: 5,
    },
    container: {
        padding: 12,
        flex: 4,
        //justifyContent: 'space-around',
        //alignItems: 'space-around'
    },
    containerFlat: {
        backgroundColor: colors.BEIGE,
        alignItems: 'center',
        justifyContent: 'pace-around',
        alignItems: 'center'
    },
    topViewContent: {
        padding:12,
        flex:1,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 1
    },
    title: {
        fontSize: 20,
        bottom: 20
    }
})