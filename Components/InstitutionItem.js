import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'

const InstitutionItem = ({ name, photoUrl, description,id,deleteInstitution,modifyInstitution }) => {
    return (
        <TouchableOpacity onPress={() => modifyInstitution(name, id, photoUrl, description)}>
            <View style={styles.container}>
                <Image
                    style={{ alignSelf: 'center', width: 60, height: 60, marginRight: 10 }}
                    source={{ uri: photoUrl || 'https://i.pinimg.com/564x/a2/5e/ed/a25eedd6c812b3873e614fa8b6e69c8b.jpg' }}
                />

                <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.treatmName}>
                        {name || 'Name'}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => deleteInstitution(id)}>
                    <Image
                        style={{ alignSelf: 'center', width: 24, height: 24, borderRadius: 50 }}
                        source={require('../icons/trash.png')}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default InstitutionItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.GRAY_COLOR,
        marginHorizontal:0
    },
    text: {
        fontFamily: 'Times New Roman',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        

    }
})