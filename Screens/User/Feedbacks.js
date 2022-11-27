import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'
import FeedbackUserCard from './FeedbackUserCard'

import dummyPicture from "../../icons/profile-picture.png"

const Feedbacks = () => {

  const [searchText, setSearchText] = useState("");

  const [feedbackList, setFeedbackList] = useState([]);

  const data = [
    {
      id: 1,
      profilePicture: dummyPicture,
      name: "Stefan ",
      comment: "Nice documents mate.",
      givenStars: 4
    },
    {
      id: 2,
      profilePicture: dummyPicture,
      name: "Alex Darau",
      comment: "I think it's the best app I've ever used!",
      givenStars: 5
    },
    {
      id: 3,
      profilePicture: dummyPicture,
      name: "Madalin Puiu",
      comment: "NOICE! NOICE! NOICE! NOICE! NOICE! NOICE! NOICE! NOICE! ",
      givenStars: 5
    },
    {
      id: 4,
      profilePicture: dummyPicture,
      name: "Andrei Pop",
      comment: "I am Ascendant.",
      givenStars: 3
    },
    {
      id: 5,
      profilePicture: dummyPicture,
      name: "Jacky Bobster",
      comment: "Imma leave now.",
      givenStars: 1
    },
    {
      id: 6,
      profilePicture: dummyPicture,
      name: "King Arthur",
      comment: "Where is Excalibur?",
      givenStars: 1
    },
  ];

  useEffect(() => {
    setFeedbackList(data);
  }, []);

  const filterFeedbacksByName = (text) => {

    if(text){
      const filteredFeedback = feedbackList.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFeedbackList(filteredFeedback);
      setSearchText(text);
    } else {
      setFeedbackList(data);
      setSearchText(text);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titleContainer}>Feedbacks</Text>

      <TextInput 
        style={styles.searchContainer}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChangeText={text => filterFeedbacksByName(text)}
      />

      <ScrollView style={styles.scrollContainer}>
        {feedbackList.map((feedback) => {
          return <FeedbackUserCard key={feedback.id} feedback={feedback}/>
        })}
      </ScrollView>

    </SafeAreaView>
  )
}

export default Feedbacks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white"
  },
  titleContainer: {
    justifyContent: "flex-start",
    fontSize: 40,
    fontFamily: "Times New Roman",
    shadowOpacity: 0.2
  },
  searchContainer: {
    justifyContent: "flex-start",
    height: 40,
    width: "90%",
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 30,
    shadowOpacity: .3,
  },
  scrollContainer: {
    padding: 15,
  }
})