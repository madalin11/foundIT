import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import profilePicture from "../../icons/profile-picture.png"
import emptyStar from "../../icons/empty-star.png"
import filledStar from "../../icons/filled-star.png"

const FeedbackUserCard = (props) => {

    const {profilePicture, name, comment} = props.feedback;

    return (
        <View style={styles.container}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                    style={styles.imageContainer}
                    source={profilePicture}
                />

                <Text style={styles.nameContainer}>{name}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Image style={styles.starContainer} source={filledStar} />
                <Image style={styles.starContainer} source={filledStar} />
                <Image style={styles.starContainer} source={filledStar} />
                <Image style={styles.starContainer} source={filledStar} />
                <Image style={styles.starContainer} source={filledStar} />

                
            </View>

            <View styles={styles.commentContainer}>
                <Text>{comment}</Text>
            </View>

        </View>
        
    )
}

export default FeedbackUserCard

const styles = StyleSheet.create({
    container: {
        shadowColor: '#202020',
        shadowOffset: { height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        padding: 15,
        backgroundColor: "lightgreen",
        marginTop: 20
    },
    nameContainer: {
        fontFamily: 'Times New Roman',
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 20,
        marginLeft: 20
    },
    imageContainer: {
        alignSelf: 'center',
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 0,
    },
    starContainer: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    commentContainer: {
        marginTop: 15,
        padding: 15
    }
})