import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Search = () => {
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
        <Item name={"xxx"} date={"123"} />
    );

    const Item = ({ name, date }) => (
        <View style={styles.item}>
            <Text >{name}</Text>
            <Text >{date}</Text>
        </View>
    );

    return (
        <View style={styles.document}>
            <Text style={styles.title}>text</Text>
            <View style={styles.containerFlat}>
                <FlatList
                    data={documentData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View >
    )
}

export default Search

const styles = StyleSheet.create({
    document: {
        flex:1,
        //alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //backgroundColor:'black'

    },
    item: {
        backgroundColor: 'red'
    },
    containerFlat: {
        alignItems: 'center'
    }
})