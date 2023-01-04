import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const sharedAlbumCard = (album, navigation) => {
    return (
        <ImageBackground source={album.background} style={styles.imageBackground} >
            <Text>sharedAlbumCard</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: 'cover',
        overflow: 'hidden',
        height: 90,
        marginTop: 30,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
});
export default sharedAlbumCard