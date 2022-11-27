import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import SimpleDocument from '../../Components/SimpleDocument'
import React from 'react'
import colors from '../../colors'
import { useState } from 'react'
import profilePicture from '../../icons/profile-picture.png'

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
                <Image 
                    style={styles.imageContainer}
                    source={profilePicture}
                />
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
        padding: 20,
        flex: 4,
        marginVertical: 20
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.BLUE,
        height: 100,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: 20,
        //marginVertical: 50,
        display: 'flex',
    },
    title: {
        fontSize: 20,
        bottom: 20
    }
})