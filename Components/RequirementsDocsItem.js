import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const RequirementsDocsItem = ({name,index,deleteInheriteDocs}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TouchableOpacity onPress={() => deleteInheriteDocs(index)} style={styles.button}>
        <Text>
            Delete inherited docs
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default RequirementsDocsItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
    button:{
        backgroundColor:'yellow',
        marginHorizontal:20
    }
})