import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Keyboard, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../../firebase'
import LottieView from "lottie-react-native";
import colors from '../../colors';
import DocumentItem from '../../Components/DocumentItem';

const Documents = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [documents, setDocuments] = useState([]);

  function deleteDocument(id) {
    db.collection("documents").doc(id).delete().then(() => {
      console.log("Document successfuly deleted");
    }).catch((error) => alert(error));
    navigation.navigate("Documents");
  }
  const modifyDocument = (name, id, photoUrl, description, inherites, price, institution) => {
    navigation.navigate('Modify document screen', {
      name: name,
      id: id,
      chosenInstitution: institution,
      price: price,
      photoUrl: photoUrl,
      description: description,
      inherites: inherites
    });
  }

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
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.BLUE, 'white', 'white']}
        style={styles.background}
      />
      <SafeAreaView style={{ alignContent: 'center', alignItems: 'flex-end', marginRight: 30, marginTop: 60 }}>
        <TouchableOpacity
          raised onPress={() => navigation.navigate("Add document screen")}
        >
          <Image source={require('../../icons/add.png')} style={{ marginLeft: 10, width: 40, height: 40, marginBottom: 20 }}></Image>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={{ marginBottom: 20, marginTop: 10, alignSelf: 'center' }}>
        <Text style={styles.headerTextStyle}>
          Documents
        </Text>
      </View>
      <View style={{ marginBottom: 40, marginTop: 10 }}>

        <TextInput

          onChangeText={(text) => setSearchText(text)}
          placeholder='Search' style={{ fontSize: 18, backgroundColor: 'white', height: 45, marginBottom: 1, paddingLeft: 55, marginHorizontal: 35, marginTop: 0, borderRadius: 10 }}
        >

        </TextInput>

        <TouchableOpacity style={{ flex: 1, alignSelf: 'flex-end', bottom: 45, right: 42 }} onPress={Keyboard.dismiss}>
          {Platform.OS != 'web' ?
            <LottieView style={styles.animation} source={require("../../icons/search.json")} />
            : null}
        </TouchableOpacity>

      </View>
      <ScrollView style={{ height: '100%' }}>

        {
          documents.filter(filterZZZ).map(({ id, data: { name, imageLink, description, documentsIds, price, chosenInstitution } }) => (
            <DocumentItem key={id} modifyDocument={modifyDocument} name={name} id={id} description={description} photoUrl={imageLink} deleteDocument={deleteDocument} inherites={documentsIds} price={price} institution={chosenInstitution} />
          ))
        }



      </ScrollView>
    </View>
  )
}

export default Documents

const styles = StyleSheet.create({
  animation: {
    top: 3,
    left: 0,
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    alignContent: 'center',
  },
  headerTextStyle: {
    color: 'white',
    fontFamily: 'Times New Roman',
    fontSize: 40,
    fontWeight: 'bold',
    shadowColor: '#202020',
    // shadowOpacity: 1,
    // shadowRadius: 2,
    //shadowOffset: { height: 3 }
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
})