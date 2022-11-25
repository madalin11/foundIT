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
    <Item key ={item.id} rname={item.name} location={item.location} />
  );

  const Item = ({ name, location, key}) => (

    <View style={styles.item}  key= {key}>
      <Text style={styles.landTitle}>{name}</Text>
      <Text style={styles.landTitle}>{location}</Text>
      <Map></Map>
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
  // textContainer: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     backgroundColor: "#339A3E"
  // },
  // textStyle: {
  //     fontSize: 18,
  //     padding: 10
  // },
  containerFlat: {
    //flex: 5,
  },
  // cropContainer: {
  //     flex: 1,
  //     //flexDirection: 'row',
  //     justifyContent: 'center',
  //     padding: 20,
  //     marginVertical: 2,
  //     marginHorizontal: 10,
  //     marginTop: 10,
  //     backgroundColor: 'green',
  //     borderRadius: 15,
  //     borderWidth: 1,
  //     borderColor: '#fff',
  // },
  title: {
    fontSize: 32,
    textAlignVertical: 'center',
    textAlignHorizontal: 'center',
    padding: 20,
    top: 20
  },
  // profileBanner: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     backgroundColor: '#9CC799',
  //     padding: 5
  // },
  // image: {
  //     width: '50%',
  //     height: '100%',
  //     resizeMode: 'contain',
  // },
  // containerList: {
  //     flex: 5,
  // },
  // container: {
  //     flex: 1,
  //     backgroundColor: 'red',
  //     //marginTop: StatusBar.currentHeight || 0,
  // },
  // containerSafe: {
  //     flex: 3,
  //     //marginTop: StatusBar.currentHeight || 0,
  // },
  item: {
    //flexDirection: 'row',
    justifyContent: 'space-between',
    //padding: 20,
    marginVertical: 2,
    //marginHorizontal: 10,
    marginTop: 10,
    //backgroundColor: 'gray',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  // title: {
  //     fontSize: 32,
  // },
  // area: {
  //     fontSize: 18
  // },
  // landTitle: {
  //     fontSize: 18
  // }
})