import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import SimpleDocument from '../../Components/SimpleDocument'
import React from 'react'
import colors from '../../colors'
import { useState, useEffect } from 'react'
import profilePicture from '../../icons/profile-picture.png'
import {db,auth} from '../../firebase'

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("documents")
      .onSnapshot(snapshot => {
        setDocuments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
      }
      )
    return unsubscribe;
  }, [db])

  function filterZZZ(element) {
    try {
      if (element.data.name == '') {
        return false;
      }
      try {

        if (element.data.name.toLowerCase().includes(searchText.toLowerCase()))
          return true;

      } catch (err) {

      }
      return false
    } catch (err) {

    }
    return true
  }

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
                <ScrollView style={{height:'100%'}}>
                    <View style={styles.containerFlat}>
                        {documents.map(({id,data:{name,chosenInstitution,documentsIds,imageLink,institutionCoord,price}}) => {
                            return <SimpleDocument key={id} document={name} documentsIds={documentsIds} navigation={navigation} imageLink={imageLink} chosenInstitution={chosenInstitution} institutionCoord={institutionCoord} price={price}/>
                        })}
                    </View>
                </ScrollView>
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