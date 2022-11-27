import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import { Map } from "../../Components/Map"
import React from 'react'
import { useState, useEffect } from 'react';
import Login from '../Login'

const Documents = (props) => {
  console.log("🚀 ~ AAAAAA", props.route.params.name)
  const [ids, setIds] = useState(['123']) //ids from db
  const seeNecesarDocuments = () => {
    // navigation.navigate('Documents', {
    //     id: ids
    //})
    
  }
  const navigateMap = () => {
    //props.navigation.navigate("Map")
}

  const [documentData, setDocumentData] = useState([
    {
      id: 1,
      name: "certificat",
      location:
      {
        latitude: 46.33188180294243,
        longitude: 22.11581192960193
      }
    },
    {
      id: 2,
      name: "certificat",
      location:
      {
        latitude: 46.33188180294243,
        longitude: 22.11581192960193
      }
    }
  ])

  const renderItem = ({ item }) => (
    <Item name={item.name} location={item.location} />
  );

  const Item = ({ name }) => (

    <View style={styles.item}>
      <Map
        location={documentData[0].location}
        documentName={documentData[0].name}
        //navigation ={navigation}
        seeNecesarDocuments = {seeNecesarDocuments}
        navigateMap = {navigateMap}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.blogScreen}>
      <Text style={styles.title}>Lista documente {props.route.params.name}</Text>
      <View style={styles.containerFlat}>
        <FlatList
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
    padding: 12
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
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    fontSize: 32,
  }
})