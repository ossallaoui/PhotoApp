import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import Avatars from './Avatars';
import Images from './Images';

const Card = ({ item, navigation} ) => {
    return (
        <ImageBackground source={item.background} style={styles.imageBackground} >
        <Pressable style={styles.container} 
        onPress={() => navigation.navigate("Images", {album: item})}>
            <View style={styles.card}>
                <View style={styles.cardtext}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDesc}>{`Created by ${item.user}`}</Text>
                </View>
                <Avatars avatars={item.avatars} />
            </View>
        </Pressable>
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
    card: {
        width: 343,
        height: 82,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    cardtext:{
        
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFF',
    },
    
    cardDesc: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFF',
    },
   
});

export default Card