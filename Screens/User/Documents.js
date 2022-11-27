import { StyleSheet, Text, View, FlatList, SafeAreaView, ToastAndroid } from 'react-native'
import { Map } from "../../Components/Map"
import React from 'react'
import { useState, useEffect } from 'react';
import Login from '../Login'
import { auth, db } from '../../firebase'

const Documents = (props) => {
  console.log("🚀 ~ AAAAAA", props.route.params.name)
  console.log(props.navigation)
  const [ids, setIds] = useState(props?.route?.params?.name?.documentsIds) //ids from db
  const seeNecesarDocuments = () => {
    // navigation.navigate('Documents', {
    //     id: ids
    //})
  }
  useEffect(() => {
    const unsubscribe = db
      .collection("documents")
      .onSnapshot(snapshot => {
        setDocumentData(
          snapshot.docs.filter((elm) => (
            ids?.indexOf(elm.id) !== -1)
          ).map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
      }
      )
    return unsubscribe;
  }, [db])
  const navigateMap = () => {
    props.navigation.navigate("BigMap")
  }

  const [documentData, setDocumentData] = useState([]);

  const renderItem = ({ item }) => (
    <Item name={item.data.name}  location={item.data.institutionCoord} locationName={item.data.chosenInstitution} docId={item.id}/>
  );

  const Item = ({ name, location, locationName , docId }) => (

    <View style={styles.item}>
      <Map
        location={location}
        documentName={name}
        locationName={locationName}
        navigation={props.navigation}
        docId={docId}
        seeNecesarDocuments={seeNecesarDocuments}
        navigateMap={navigateMap}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.blogScreen}>
      <View style={{ marginTop: 40, marginBottom: 20, alignItems: 'center', alignSelf: 'center' }}>
        <Text style={styles.titleTextStyle}>
          Document: {props?.route.params.name}
        </Text>
      </View>
      <View style={styles.containerFlat}>
        <FlatList style={{ height: '100%' }}
          data={documentData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView >
  )
}

export default Documents

const styles = StyleSheet.create({
  blogScreen: {
    flex: 1,
   
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    textAlignVertical: 'center',
    textAlignHorizontal: 'center',
    padding: 20,
    top: 20
  },
  // },
  item: {
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //padding: 20,
    marginVertical: 2,
    //marginHorizontal: 10,
    marginTop: 10,
    //borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  title: {
    fontSize: 32,
  },
  titleTextStyle: {
    fontFamily: 'Times New Roman',
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    shadowColor: '#202020',
    shadowOffset: { height: 3 },
    shadowOpacity: 1,



},
})