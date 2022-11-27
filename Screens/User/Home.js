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
            name: "Birth certificate"
        },
        {
            id: 2,
            name: "Mariage certificate"
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
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>Hello, Aleps!</Text>
                    <Text style={styles.description}>What document you want to take today??</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={profilePicture}
                    />
                </View>
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
       // marginVertical: 20,
        backgroundColor: colors.BEIGE,
        //justifyContent: 'space-around',
        //alignItems: 'space-around'
    },
    containerFlat: {
        backgroundColor: colors.BEIGE,
        alignItems: 'center',
        justifyContent: 'pace-around',
        alignItems: 'center',
    },
    topViewContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.BLUE,
        display: 'flex',
    },
    title: {
        fontSize: 20,
    },
    nameContainer: {
        justifyContent: 'center'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 16
    },
})