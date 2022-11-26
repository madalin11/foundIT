import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Documents = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Admin Documents</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Add document screen")}>
        <Text>
          Add document
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Documents

const styles = StyleSheet.create({})