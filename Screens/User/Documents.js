import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import { Map } from "./Map"
import React from 'react'
import Login from '../Login'

const Documents = () => {

  const documentData = [
    { id: 1,
      name: "certificat",
      location: 'xxx'
    },
    {
      id: 2,
      name: "certificat",
      location: 'xxx'
    }
  ]
  const renderItem = ({ item }) => (
    <Item name={item.name} location={item.location} />
  );

  const Item = ({ name }) => (

    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Map/>
    </View>
  );

  return (
    <SafeAreaView style={styles.blogScreen}>
      <Text style={styles.title}>Lista documente</Text>
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
    //alignItems: 'center',
    //justifyContent: 'center',
    //backgroundColor: '#EAEAEA'
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
    //backgroundColor: 'gray',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
      fontSize: 32,
  }
})